const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const spawn = require("cross-spawn");

const { switchLanguage, switchFrame, isNeedStylelint } = require("./ask");
const { eslintrcConfig, needDeps } = require("./config");
const PROJECT_PATH = path.resolve(__dirname, "../");

const content = {
  husky: {
    hooks: {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged",
    },
  },
  config: {
    commitizen: {
      path: "cz-conventional-changelog",
    },
  },
};
module.exports = async () => {
  const language = await switchLanguage();
  const frame = await switchFrame();
  const isStylelint = await isNeedStylelint();

  let type = language;
  if (frame) {
    type += `/${frame}`;
  }
  console.log(fs.readFileSync(path.join(PROJECT_PATH, "eslintConfig.js")));

  // 写 .eslintrc.js 文件
  fs.writeFileSync(
    path.join(process.cwd(), ".eslintrc.js"),
    fs.readFileSync(path.join(PROJECT_PATH, "eslintConfig.js"))
  );
  fs.appendFile(path.join(process.cwd(), ".eslintrc.js"), content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //完成！
  });
  writeJson({
    husky: {
      hooks: {
        "pre-commit": "lint-staged",
        "commit-msg":
          "commitlint --config .commitlintrc.js -E HUSKY_GIT_PARAMS",
      },
    },
  });

  // 读取package.json文件
  function writeJson(params) {
    //现将json文件读出来
    fs.readFile(
      path.join(process.cwd(), "package.json"),
      function (err, stream) {
        if (err) {
          return console.error(err);
        }
        let stringData = JSON.parse(stream.toString()); //将buffer --> string --> json
        stringData = {
          ...stringData,
          ...params,
        };
        const newStr = JSON.stringify(stringData, null, 2);
        fs.writeFile(
          path.join(process.cwd(), "package.json"),
          newStr,
          function (err) {
            if (err) {
              console.error(err);
            }
            console.log("----------新增成功-------------");
          }
        );
      }
    );
  }

  const deps = needDeps.javascript;
  if (language === "typescript") {
    deps.concat(needDeps.typescript);
  }
  if (frame) {
    deps.concat(needDeps[frame]);
  }
  if (isStylelint) {
    console.log(chalk.green("isStylelint"));
  }

  console.log();
  console.log(chalk.green(`使用配置：${type}`));
  console.log(chalk.green(`安装所需依赖：${deps.join(" + ")}`));
  console.log();
  console.table(deps);
  try {
    spawn.sync("npm", ["install", ...deps, "--save-dev"], { stdio: "inherit" });
  } catch {}
};
