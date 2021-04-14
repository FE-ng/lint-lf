const inquirer = require("inquirer");

const switchFrame = async () => {
  const { frame } = await inquirer.prompt([
    {
      type: "list",
      name: "frame",
      message: "请选择项目使用的框架：(React/Vue)",
      choices: [
        {
          name: "React",
          value: "react",
        },
        {
          name: "Vue",
          value: "vue",
        },
        {
          name: "None",
          value: "",
        },
      ],
    },
  ]);

  return frame;
};
const switchLanguage = async () => {
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "请选择项目使用的语言：(JavaScript/TypeScript)",
      choices: [
        {
          name: "JavaScript",
          value: "javascript",
        },
        {
          name: "TypeScript",
          value: "typescript",
        },
      ],
    },
  ]);
  return language;
}

const isNeedStylelint = async () => {
  const { isStylelint } = await inquirer.prompt([
    {
      type: "confirm",
      name: "isStylelint",
      message: "是否需要stylelint?(默认关闭)",
      default: false,
    },
  ]);
  return isStylelint;
};

module.exports = {
  switchLanguage,
  switchFrame,
  isNeedStylelint,
};
