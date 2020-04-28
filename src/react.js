const shell = require("shelljs");
const deps = require("./deps");

exports.react = async (name, pm) => {
  if (
    shell.cp(
      "-r",
      "./templates/react/*",
      "./templates/react/.*",
      `~/web-starter-projects/${name}`
    ).code !== 0
  ) {
    shell.echo("Error: Copying react resources failed");
    shell.exit(1);
  }

  //switch working directory
  if (shell.cd(`~/web-starter-projects/${name}`).code != 0) {
    shell.echo("Error: Copying react resources failed");
    shell.exit(1);
  }

  await deps.deps(pm);
};
