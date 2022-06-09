#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { parseCommand } = require("../common/utils");

const files = fs.readdirSync(path.resolve(__dirname, "..", "commands"));
const commands = new Set(files.map((filename) => filename.replace(".js", "")));

const bootstrapCli = () => {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt("myredis> ");
  rl.prompt();

  rl.on("line", function (line) {
    const { cmd, args } = parseCommand(line);

    const valid = commands.has(cmd);

    let result = "";
    if (valid) {
      if (cmd === "end") rl.close();

      const run = require(`../commands/${cmd}.js`).run;
      result = run(args);
    } else {
      result = "NO VALID COMANND OR ARGUMENTS";
    }
    if (result) {
      console.log(result);
    }
    rl.prompt(true);
  }).on("close", function () {
    process.exit(0);
  });
};

bootstrapCli();
