let global;

module.exports = () => {
  if (!global) {
    console.log('set global');
    global = 'tada';
  }
  return global;
};
