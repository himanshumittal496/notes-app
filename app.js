const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//creating add command
yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    body: {
        describe: 'note body',
        demandOption: true,
        type: 'string'

    },
    handler(argv){
       notes.addNote(argv.title ,argv.body) 
    }
})


yargs.parse()
