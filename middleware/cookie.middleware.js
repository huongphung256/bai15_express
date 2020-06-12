var count = 1;
module.exports.cookies = (req, res, next) => {
    if(req.cookies) {
        console.log(`${req.cookies.cookies}: ${count}`)
        count++;
    }
    next();
}