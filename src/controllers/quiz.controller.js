const quizService = require('../services/quiz.service');

const getAll = async (_req, res) => {
  const themes = await quizService.getAll();
  return res.status(200).json(themes);
}

module.exports = {
  getAll,
}