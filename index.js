const { text } = require('micro');
const global = require('./global');

module.exports = (req, res) => {
  console.log('global', global());
  res.end('tada');
};
