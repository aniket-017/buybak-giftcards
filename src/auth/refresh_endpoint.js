export const refresh = async (req, res) => {
  const token = req.cookies.refresh_token;

  const hash = crypto.createHash("sha256").update(token).digest("hex");

  const stored = await db.refreshToken.findFirst({
    where: { token_hash: hash, revoked: false },
  });

  if (!stored) return res.status(401).send("Invalid token");

  // revoke old
  await db.refreshToken.update({
    where: { id: stored.id },
    data: { revoked: true },
  });

  const user = await db.user.findUnique({
    where: { id: stored.user_id },
  });

  const newAccess = signAccessToken(user);
  const newRefresh = await issueRefreshToken(user.id);

  res.cookie("refresh_token", newRefresh, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });

  res.json({ accessToken: newAccess });
};
