const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json('Olá, esta é uma API de quiz para diversos jogos.')
})

module.exports = app;