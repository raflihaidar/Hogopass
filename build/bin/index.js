#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const console_1 = require("console");
const figlet_1 = __importDefault(require("figlet"));
(0, console_1.clear)();
console.log(chalk_1.default.green(figlet_1.default.textSync("HOGOPASS", { horizontalLayout: "fitted" })));
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
//       console.log(`Hello, ${options.name}!`);
//     } else {
//       console.log("Hello, world!");
//     }
//   });
// program.parse(process.argv);
