const router = require("express").Router();
const note = require("../lib/note");
const notes = require("../db/db.json");

router.get("/notes", (req, res) => {
    res.status(200).json(notes);
});

router.post("/notes", (req,res) => {
    const newNote = note.createNote(req.body, notes);
    res.status(200).json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    const remove = note.deleteNote(req.params.id, notes)
    res.status(200).json(remove)
});

module.exports = router;