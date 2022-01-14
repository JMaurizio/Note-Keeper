const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


class Note {
    
    createNote(note, notes) {
        if(note.title !== null && note.text !== null) {
            note.id = uuidv4();
            notes.push(note);
            saveNote(notes)
        }
    };

    deleteNote(id, notes) {
        const deleted = notes.filter(note => note.id !== id);
        saveNote(deleted)
    };
}

function saveNote(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
};

module.exports = new Note();