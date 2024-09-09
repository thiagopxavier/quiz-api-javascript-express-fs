const fs = require('fs').promises;
const path = require('path');
const themesPath = path.resolve(__dirname, '../data/data.json');


const getAll = async () => {
  const themes = await fs.readFile(themesPath, 'utf8')
  return themes;
}

module.exports = {
  getAll,
}