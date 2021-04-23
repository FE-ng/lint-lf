/* eslint-disable no-console */
const inquirer = require('inquirer');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ora = require('ora');

let spinner;
async function execute() {
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
    execSync(`git commit -m 'chore(config): 发版更新' & npm publish`);
  } catch (error) {
    spinner.stop();
    console.log('发布失败', error);
  }
  spinner.stop();
  console.log('发布成功');
}
try {
  execute();
} catch (error) {
  spinner.stop();
  console.log('发布失败', error);
}
