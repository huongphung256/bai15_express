const express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var bookRoute = require('./routes/book.route');
var transactionRoute = require('./routes/transaction.route');
const cookie = require('./middleware/cookie.middleware');
const authMiddleware = require('./middleware/auth.middle');
const authRoute = require('./routes/auth.route');
const shortid = require('shortid');
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public'));

app.use('/users', authMiddleware.authLogin, cookie.cookies, userRoute);
app.use('/books', authMiddleware.authLogin, cookie.cookies, bookRoute);
app.use('/transactions', authMiddleware.authLogin, cookie.cookies, transactionRoute);
app.use('/auth', authRoute);
app.get('/', (req, res) => {
  res.cookie('cookies', shortid.generate());
  res.send('Hello');
})
app.listen(3000, function() {
  console.log('Server listening on port ' + 3000);
});