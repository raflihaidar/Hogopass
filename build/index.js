#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .name("Hogopass")
    .version("1.0.0")
    .description("A tool that manages passwords stored in an encrypted file is called a Password Manager.")
    .option("-n, --name <type>", "Specify the name")
    .action((options) => {
    if (options.name) {
        console.log(`Hello, ${options.name}!`);
    }
    else {
        console.log("Hello, world!");
    }
});
program.parse(process.argv);
