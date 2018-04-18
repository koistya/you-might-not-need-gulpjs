const build = require('./build')

module.exports = async () => {
  await build({ watch: true });
  setInterval(() => {}, 10000);
  console.log('The app listening on port XXXXX.')
  console.log('Press CTR+C to exit.');
};
