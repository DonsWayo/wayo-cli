import {Command, flags} from '@oclif/command'

export default class Init extends Command {
  static description = 'create a new project'

  static args = [
    {
      name: 'file',               // name of arg to show in help and reference with args[name]
      required: false,            // make the arg required with `required: true`
      description: 'output file', // help description
      hidden: true,               // hide this arg from help
     // parse: input => 'output',   // instead of the user input, return a different value
      default: 'world',           // default value if no arg input
      options: ['a', 'b'],        // only allow input to be from a discrete set
    }
  ]
  
  async run() {
    // can get args as an object
    const {args} = this.parse(Init)
    console.log(`running my command with args: ${args.options}`)
    // can also get the args as an array
    const {argv} = this.parse(Init)
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
  
}
