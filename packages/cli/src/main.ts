#!/usr/bin/env node

import yargs, { Argv } from "yargs";

yargs
  .commandDir("commands", {
    visit(commandModule: any): any {
      return commandModule.default;
    }
  })
  .demandCommand()
  .help().argv;
