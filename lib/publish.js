/* eslint-disable no-console */
const inquirer = require('inquirer');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');

let spinner;
async function execute() {
  try {
    const user = execSync('npm who am i --registry=https://registry.npmjs.org/');
    console.log(chalk.green(`当前npm登录账号: ${user}`));
  } catch (error) {
    console.error(error, chalk.red('npm 账号状态异常'));
  }
  const pathStr = path.join(`${process.cwd()}`, 'package.json');
  const result = JSON.parse(fs.readFileSync(pathStr, { encoding: 'utf-8' }));
  const oldVersion = result.version;
  const defaultNew = oldVersion.replace(/(?<=\.)(\d+)$/, ($1) => +$1 + 1);
  const promptVersionList = [
    {
      type: 'input',
      message: `当前版本为${oldVersion}, 请输入需要发布的版本号:`,
      name: 'version',
      default: defaultNew, // 默认值
    },
  ];
  const { version } = await inquirer.prompt(promptVersionList);
  result.version = version;
  fs.writeFileSync(path.join(pathStr), JSON.stringify(result, null, 2), 'utf-8');
  execSync('git add package.json');
  spinner = ora('编译发布中...').start();
  try {
    execSync(`git commit -m 'chore(config): 发版更新' & npm publish --registry=https://registry.npmjs.org/`);
    console.log(chalk.green('发布成功'));
  } catch (error) {
    spinner.stop();
    console.log(error);
    console.log(chalk.red('发布失败'));
  }
  spinner.stop();
}
try {
  execute();
} catch (error) {
  spinner.stop();
  console.log(error);
  console.log(chalk.red('发布失败'));
}
