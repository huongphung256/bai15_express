const express = require('express');

const bookControllers = require('../controllers/book.controller');

const router = express.Router();

router.get('', bookControllers.index);

router.get('/add', bookControllers.add);

router.get('/:id/delete', bookControllers.delete);

router.get('/:id/update', bookControllers.update);

router.post('/add', bookControllers.postAdd);

router.post('/:id/update', bookControllers.postUpdate);

module.exports = router;