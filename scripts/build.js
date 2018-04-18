const { task } = require('./utils');

module.exports = task('build', async options => {
  // Build options
  const env = options && options.env || 'development';
  const watch = options && options.watch || false;

  process.stdout.write(`Building (env: ${env}, watch: ${watch}) `);

  // Halt the process for 3 seconds as an example
  for (const _ of Array.from({ length: 3 })) {
    process.stdout.write('.');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  process.stdout.write('\n');
});
