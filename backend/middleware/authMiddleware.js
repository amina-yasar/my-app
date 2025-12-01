import jwt from "jsonwebtoken";
import Staff from "../models/Staff.js";

export const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Staff.findById(decoded.id).select("-password -plainPassword");

    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ error: "Token invalid" });
  }
};
