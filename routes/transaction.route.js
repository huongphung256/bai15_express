  
const express = require('express');
const transactionControllers = require('../controllers/transaction.controller');
var router = express.Router();

router.get('', transactionControllers.index);

router.get('/create', transactionControllers.create);

router.get('/:id/complete', transactionControllers.isComplete);

module.exports = router;