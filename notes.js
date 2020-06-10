const fs = require('fs')
const getNotes = () => {
    return 'Your notes..'
}
const addNote =  (title , body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
         
    if (!duplicateNote){
        notes.push ({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note')
    } else{
        console.log('note already taken')

    }
    
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJSON)
}
const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.tostring()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}