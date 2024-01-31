const jwt = require("jsonwebtoken");
const User = require("../db/models/auth");

module.exports = (req, res, next) => {
  try {
    const token = req.header("Authentication");
    const user = jwt.verify(token, process.env.TOKEN);
    User.findByPk(user.userId).then((user) => {
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ success: false });
  }
};
