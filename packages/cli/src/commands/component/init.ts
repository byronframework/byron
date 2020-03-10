import { CommandModule, Arguments, CommandBuilder } from "yargs";
import GraphQLGenerator from "@byron/generators";

interface initArgs {
  name: string;
}

const init: CommandModule<{}, initArgs> = {
  command: "init [name]",
  describe: "Initialize a component named <name>",
  handler(args: Arguments<initArgs>): void {
    const gen: GraphQLGenerator = new GraphQLGenerator(args.name);
    console.log(gen);
  }
};

export default init;
