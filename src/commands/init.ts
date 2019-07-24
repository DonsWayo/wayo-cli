import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import * as shell from 'shelljs'
import cli from 'cli-ux'
import * as signale from 'signale'
import * as fs from 'fs'
import * as ejs from 'ejs'
const replace = require('replace-in-file')

export enum TYPE_OF_APP {
  REACT_JS = 1,
  REACT_NATIVE_JS = 2,
  REACT_TS = 3,
  REACT_NATIVE_TS = 4,
  EXPO_TS = 5,
}

export default class Init extends Command {
  
  static flags = {
    type: flags.string({options: ['React Native']}),
    boilerplate: flags.string({options: ['React Native']}),
  }

  async run() {
    let repoName: string
    let gitName: string
    const name = await cli.prompt('project name?')

    let responses: any = await inquirer.prompt([{
      name: 'git',
      message: 'use git',
      type: 'confirm'
    }])
    const git = responses.git

    if (git) {
       repoName = await cli.prompt('repo name')
       gitName = await cli.prompt('repo name')
     
     
    }

    const {flags} = this.parse(Init)
    let type = flags.type
    if (!type) {
      let responses: any = await inquirer.prompt([{
        name: 'type',
        message: 'Select a type of project',
        type: 'list',
        choices: [{name: 'react-native'}],
      }])
      type = responses.type
    }
    this.log(`the stage is: ${type}`)
    let boilerplate = flags.boilerplate
    if (!boilerplate) {
      let responses: any = await inquirer.prompt([{
        name: 'boilerplate',
        message: 'Select a boilerplate',
        type: 'list',
        choices: [{name: 'typescript-redux'}],
      }])
      boilerplate = responses.boilerplate
    }
    await this.clone(name,'none','none', git)
    
  }

  async clone(name: string, type: string, boilerplate: string, git: boolean) {
    signale.await();
    if (shell.exec('git clone https://github.com/microsoft/TypeScript-React-Native-Starter.git ./' + name, {silent:true}).code !== 0) {
      signale.error('have git installed? or have same name folder?')
      shell.exit(1);
    } else {
      await this.packageJson('./lol/ExampleProject/', name, git)
      signale.success();
      
    }
  }

  packageJson(file: any, projectName: string, git?: boolean, repoName?: string, gitName?:string) {
    console.log(git)
    let options
    if (git) {
      options = {
        files: file + 'package.json',
        from: [/ExampleProject/g, /ExampleProject/g],
        to: [projectName, repoName, gitName],
      };
    } else {
      options = {
        files: file + 'package.json',
        from: /ExampleProject/g,
        to: projectName,
      };
    }
    try {
      replace.sync(options);
    }
    catch (error) {
      signale.error('Error occurred:', error)
      shell.exit(1);
    }
  }
  
}

