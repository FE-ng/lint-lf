// 写 .eslintrc.js 文件
const fs = require('fs');
const path = require('path');
const CONFIG_PATH = path.resolve(__dirname, '../config');

const writeEslint = () => {
  fs.writeFileSync(path.join(process.cwd(), '.eslintrc.js'), fs.readFileSync(path.join(CONFIG_PATH, 'eslint.js')));
};

const writeCommitlint = () => {
  fs.writeFileSync(path.join(process.cwd(), '.cz-config.js'), fs.readFileSync(path.join(CONFIG_PATH, 'cz-config.js')));
  fs.writeFileSync(path.join(process.cwd(), '.commitlintrc.js'), fs.readFileSync(path.join(CONFIG_PATH, 'commitlint.js')));
};

const writeStylelint = () => {
  fs.writeFileSync(path.join(process.cwd(), '.stylelintrc.js'), fs.readFileSync(path.join(CONFIG_PATH, 'stylelint.js')));
};

const writeTs = () => {
  fs.writeFileSync(path.join(process.cwd(), 'tsconfig.json'), fs.readFileSync(path.join(CONFIG_PATH, 'tsconfig.json')));
};

const writePrettier = () => {
  fs.writeFileSync(path.join(process.cwd(), '.prettierrc'), fs.readFileSync(path.join(CONFIG_PATH, 'prettierrc.json')));
};


// 读取package.json文件
const writeJson = async (params) => {
  try {
    //读取package.json文件
    const stream = fs.readFile(path.join(process.cwd(), 'package.json'));
    let stringData = JSON.parse(stream.toString()); // buffer --> string --> json
    stringData = {
      ...stringData,
      ...params,
    };
    const newStr = JSON.stringify(stringData, null, 2);
    // 重新写入package,json文件
    const writeRes = fs.writeFileSync(path.join(process.cwd(), 'package.json'), newStr);
    if (writeRes) {
      console.log('----------package.json新增成功-------------');
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  writeEslint,
  writeCommitlint,
  writeStylelint,
  writeTs,
  writePrettier,
  writeJson,
};
