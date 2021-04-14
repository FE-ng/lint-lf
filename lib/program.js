const commander = require("commander");
const chalk = require("chalk");
const packageJson = require("../package.json");

module.exports = async function () {
  const program = new commander.Command(packageJson.name).version(
    packageJson.version,
    "-v --version"
  );

  program
    .command("config")
    .description("Auto Config ESLint.")
    .action(() => {
      require("./lint")();
    });

  program.on("--help", () => {
    console.log(
      `Run ${chalk.cyan(
        `lflint <command> --help`
      )} for detailed usage of given command.`
    );
  });

  program.commands.forEach((c) => c.on("--help", () => console.log()));

  program.parse(process.argv);
};
