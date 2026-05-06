// src/middleware/auth.middleware.js
import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) return res.sendStatus(401);

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY, {
      algorithms: ["RS256"],
    });

    req.user = decoded;
    next();
  } catch {
    return res.sendStatus(403);
  }
};
