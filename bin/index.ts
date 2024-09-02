#!/usr/bin/env node

import chalk from "chalk";
import { textSync } from "figlet";

const log = console.log;

log(
  chalk.green(
    textSync("Hogopass", {
      horizontalLayout: "fitted",
    }),
  ),
);

// import { Command } from "commander";

// const program = new Command();

// program
//   .name("Hogopass")
//   .version("1.0.0")
//   .description(
//     "A tool that manages passwords stored in an encrypted file is called a Password Manager.",
//   )
//   .option("-n, --name <type>", "Specify the name")
//   .action((options) => {
//     if (options.name) {
//       console.log(chalk.red(`Hello, ${options.name}!`));
//     } else {
//       console.log("Hello, world!");
//     }
//   });

// program.parse(process.argv);
