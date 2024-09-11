const express = require('express');
const quizRouter = require('./routers/quiz.router');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite todos os domínios
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (_req, res) => {
  res.status(200).json('Olá, esta é uma API de quiz para diversos jogos.')
})

app.use('/themes', quizRouter);

module.exports = app;
