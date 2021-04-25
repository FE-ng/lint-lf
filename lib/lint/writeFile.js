/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
// 写 .eslintrc.js 文件
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const CONFIG_PATH = path.resolve(__dirname, '../config');
const { needDeps } = require('./config');
const { config } = require('../config/packageConfig');

const _writeEslint = () => {
  fs.writeFileSync(path.join(process.cwd(), '.eslintrc.js'), fs.readFileSync(path.join(CONFIG_PATH, 'eslint.js')));
  console.log(chalk.green('成功生成 .eslintrc.js '));
};

const _writeCommitlint = () => {
  fs.writeFileSync(path.join(process.cwd(), '.cz-config.js'), fs.readFileSync(path.join(CONFIG_PATH, 'cz-config.js')));
  fs.writeFileSync(
    path.join(process.cwd(), '.commitlintrc.js'),
    fs.readFileSync(path.join(CONFIG_PATH, 'commitlint.js')),
  );
  console.log(chalk.green('成功生成 .cz-config.js & .commitlintrc.js '));
};

const _writeStylelint = () => {
  fs.writeFileSync(
    path.join(process.cwd(), '.stylelintrc.js'),
    fs.readFileSync(path.join(CONFIG_PATH, 'stylelint.js')),
  );
  console.log(chalk.green('成功生成 .stylelintrc.js '));
};

const _writeTs = () => {
  fs.writeFileSync(path.join(process.cwd(), 'tsconfig.json'), fs.readFileSync(path.join(CONFIG_PATH, 'tsconfig.json')));
  console.log(chalk.green('成功生成 tsconfig.json '));
};

const _writePrettier = () => {
  fs.writeFileSync(path.join(process.cwd(), '.prettierrc'), fs.readFileSync(path.join(CONFIG_PATH, 'prettierrc.json')));
  console.log(chalk.green('成功生成 .prettierrc '));
};

const _writeVscode = () => {
  if (!fs.existsSync(path.join(process.cwd(), '/.vscode'))) {
    fs.mkdirSync(path.join(process.cwd(), '/.vscode'));
  }
  fs.writeFileSync(
    path.join(process.cwd(), '/.vscode/settings.json'),
    fs.readFileSync(path.join(CONFIG_PATH, 'setting.json')),
  );

  console.log(chalk.green('成功生成 setting.json '));
};

const _writeGitIgnore = () => {
  const res = fs.access(process.cwd(), '.gitignore');
  if (!res) {
    return
  }
  fs.writeFileSync(
    path.join(process.cwd(), '.gitignore'),
    fs.readFileSync(path.join(CONFIG_PATH, '.gitignore')),
  );
  console.log(chalk.green('成功生成 .gitignore 文件'));
}

// 读取package.json文件
const _writeJson = async (params) => {
  try {
    // 读取package.json文件
    const stream = fs.readFileSync(path.join(process.cwd(), 'package.json'));
    let stringData = JSON.parse(stream.toString()); // buffer --> string --> json
    stringData = {
      ...stringData,
      ...params,
    };
    const newStr = JSON.stringify(stringData, null, 2);
    // 重新写入package,json文件
    fs.writeFileSync(path.join(process.cwd(), 'package.json'), newStr);
    console.log(chalk.green('----------package.json新增成功-------------'));
  } catch (error) {
    console.error(error);
  }
};

const _baseConfig = () => {
  _writeGitIgnore();
  _writeVscode();
  _writeTs();
  _writePrettier();
};

const getLintDev = async (configLint) => {
  const deps = configLint.reduce((prev, next) => [...prev, ...needDeps[next]], [...needDeps.base]);
  const newDeps = deps.map((dep) => `${Object.keys(dep)}@${dep[Object.keys(dep)]}`);
  return newDeps;
};

const autoHandleFiles = async (configLint) => {
  const newConfig = config;
  const configSet = new Set([...configLint]);
  // base config
  _baseConfig();
  if (configSet.has('all')) {
    _writeEslint();
    _writeCommitlint();
    _writeStylelint();
    _writeJson(newConfig);
    return;
  }
  if (configSet.has('eslint')) {
    _writeEslint();
  }
  if (!configSet.has('commitlint')) {
    delete newConfig.config;
    delete newConfig.husky.hooks['commit-msg'];
  } else {
    _writeCommitlint();
  }
  if (configSet.has('stylelint')) {
    _writeStylelint();
  }
  _writeJson(newConfig);
};

module.exports = {
  getLintDev,
  autoHandleFiles,
};
