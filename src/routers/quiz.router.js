const express = require('express');
const quizController = require('../controllers/quiz.controller');

const router = express.Router();

router.get('/', quizController.getAll);

module.exports = router;