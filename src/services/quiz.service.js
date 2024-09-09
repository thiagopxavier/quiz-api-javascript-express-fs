const quizModel = require('../models/quiz.model');

const getAll = async () => {
  const themes = await quizModel.getAll();
  return JSON.parse(themes);
}

module.exports = {
  getAll,
}