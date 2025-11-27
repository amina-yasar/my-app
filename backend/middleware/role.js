// middleware/role.js
module.exports = function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "Authentication required." });
    // if user.role matches or user is admin allow
    if (req.user.role === role || req.user.role === "admin") {
      return next();
    }
    return res.status(403).json({ error: "Forbidden: insufficient privileges." });
  };
};
