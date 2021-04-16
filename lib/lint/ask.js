const inquirer = require('inquirer');

const switchFrame = async () => {
  const { frame } = await inquirer.prompt([
    {
      type: 'list',
      name: 'frame',
      message: '请选择项目使用的框架：(React/Vue)',
      choices: [
        {
          name: 'React',
          value: 'react',
        },
        {
          name: 'Vue',
          value: 'vue',
        },
        {
          name: 'None',
          value: '',
        },
      ],
    },
  ]);

  return frame;
};

const switchLanguage = async () => {
  const { language } = await inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: '请选择项目使用的语言：(JavaScript/TypeScript)',
      choices: [
        {
          name: 'JavaScript',
          value: 'javascript',
        },
        {
          name: 'TypeScript',
          value: 'typescript',
        },
      ],
    },
  ]);
  return language;
};

const configLint = async () => {
  const { lintConfig } = await inquirer.prompt({
    name: 'lintConfig',
    type: 'checkbox',
    message: '\r\n 请选择需要添加的lint类型 \r\n please choose the lint types as you wish \r\n',
    choices: ['eslint', 'commitlint', 'stylelint'],
    default: ['eslint', 'commitlint'],
    validate: (value) => {
      if (value.length === 0) {
        return 'lint依赖不能为空';
      }
      return true;
    },
    filter: (value) => {
      if (value.length === 3) {
        return ['all'];
      }
      return value;
    },
  });
  return lintConfig;
};

module.exports = {
  switchLanguage,
  switchFrame,
  configLint,
};
