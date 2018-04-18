const build = require('./build');
const { task } = require('./utils');

module.exports = task('deploy', async () => {
  // Deployment options
  const slot = process.argv.includes('--prod') ? 'production' : 'staging';

  await build({ env: 'production' });

  process.stdout.write(`Deploying (slot: ${slot})`);

  // Halt the process for 3 seconds as an example
  for (const _ of Array.from({ length: 3 })) {
    process.stdout.write('.');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  process.stdout.write('\n');
});
