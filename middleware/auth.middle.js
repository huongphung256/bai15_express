module.exports.authLogin = (req, res, next) => {
    if (!req.cookies.userId) {
      res.redirect('auth/login');
    }
    next();
};