const chalk = require('chalk');
const spawn = require('cross-spawn');

const { switchLanguage, switchFrame, isNeedStylelint } = require('./ask');
const { needDeps } = require('./config');
const { config } = require('../config/packageConfig');
const { writeJson, writeEslint } = require('./writeFile');

module.exports = async () => {
  const isStylelint = await isNeedStylelint();
  writeJson(config);
  writeEslint();
  const deps = needDeps.all;
  const newDeps = deps.map((dep) => `${Object.keys(dep)}@${dep[Object.keys(dep)]}`);
  if (isStylelint) {
    console.log(chalk.green('isStylelint'));
  }
  console.log(chalk.green('安装所需依赖'));
  console.table(newDeps);
  try {
    spawn.sync('npm', ['install', ...newDeps, '--save-dev'], { stdio: 'inherit' });
  } catch {}
};
