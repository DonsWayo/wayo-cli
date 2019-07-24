import { Command } from '@oclif/command'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as path from 'path'
import * as chalk from 'chalk'

export default class New extends Command {
  static description = 'generate files'
/* 
  static flags = {
    type: flags.string({ options: ['rnc'] }),

  } */

  static args = [
    {name: 'type'},
    {name: 'name'},
  ]

  async run() {
    const { args } = this.parse(New)

    console.log(args)
    const filePath = path.join(__dirname, '../templates/react-native/class-component/ClassComponent.ejs')
    //const rend = await this.readTemplate(filePath)
    //const ej = await ejs.render(rend, { className: 'lol' })
    const ej = await ejs.renderFile(filePath,{ className: 'lol' })
    console.log(ej)
    this.log(`The following list of files will be created: 
    ${chalk.default.green(
            ['',
               '- /components//javascripts/',
               '- /public/images/',
               '- /public/stylesheets/',
              ''
    ].join("\n"))}`)
  }

}
