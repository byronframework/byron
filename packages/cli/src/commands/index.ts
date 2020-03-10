import { CommandBuilder, Argv, CommandModule } from "yargs";

const component: CommandModule = {
  command: "component <command>",
  describe: "Manage set of tracked repos",

  builder(yargs: Argv): Argv {
    return yargs.commandDir("component", {
      visit(object: any): any {
        return object.default;
      }
    });
  },
  handler(_: any): void {}
};

export default component;
