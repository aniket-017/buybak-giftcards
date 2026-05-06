// src/services/token.service.js
import jwt from "jsonwebtoken";
import crypto from "crypto";
import db from "../utils/db.js";

export const signAccessToken = (user) => {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      algorithm: "RS256",
      expiresIn: process.env.ACCESS_TOKEN_EXP,
    }
  );
};

export const issueRefreshToken = async (userId) => {
  const rawToken = crypto.randomBytes(64).toString("hex");
  const hash = crypto.createHash("sha256").update(rawToken).digest("hex");

  await db.refreshToken.create({
    data: {
      user_id: userId,
      token_hash: hash,
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  return rawToken;
};
