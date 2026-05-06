// src/controllers/auth.controller.js
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import db from "../utils/db.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  // Find or create user
  let user = await db.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) {
    user = await db.user.create({
      data: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        google_sub: payload.sub,
      },
    });
  }

  const accessToken = signAccessToken(user);
  const refreshToken = await issueRefreshToken(user.id);

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });

  res.json({ accessToken });
};
