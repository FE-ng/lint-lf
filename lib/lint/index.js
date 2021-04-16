const chalk = require('chalk');
const spawn = require('cross-spawn');

const { configLint } = require('./ask');
const { getLintDev, autoHandleFiles } = require('./writeFile');

module.exports = async () => {
  const lint = await configLint();
  const newDeps = await getLintDev(lint);
  console.log(chalk.green('安装所需依赖'));
  console.table(newDeps);
  // install deps
  try {
    autoHandleFiles(lint);
    spawn.sync('npm', ['install', ...newDeps, '--save-dev'], { stdio: 'inherit' });
  } catch (error) {
    console.error(error);
  }
};
