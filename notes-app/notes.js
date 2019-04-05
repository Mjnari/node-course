const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title is already taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length !== notes.length){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }
}

const listNotes = () => {
    console.log(chalk.blue.inverse("Your notes"))

    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.green.bold(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if(noteToRead){
        console.log(chalk.blue.bold(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse("Title not found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
