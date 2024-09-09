const express = require('express');
const quizRouter = require('./routers/quiz.router');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json('Olá, esta é uma API de quiz para diversos jogos.')
})

app.use('/themes', quizRouter);

module.exports = app;