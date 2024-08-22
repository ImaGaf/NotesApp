import { createNote, deleteNote, editNote, getAllNotes, getArchievedNotes, getByCathegoryNote, getByUser, toggleArchiveStatus, getUnarchievedNotes } from '../services/notes.services';

const createNoteHandler = async (req, res) => {
    try {
        const newNote = req.body;
        const note = await createNote(newNote);
        res.status(201).json(note);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteNoteHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await deleteNote(id);
        res.status(200).json({ message });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const editNoteHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const message = await editNote(id, updatedData);
        res.status(200).json({ message });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const getAllNotesHandler = async (req, res) => {
    try {
        const notes = await getAllNotes();
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const getByUserHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const notes = await getByUser(userId);
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const getArchievedNotesHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const notes = await getArchievedNotes(userId);
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const getUnarchievedNotesHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const notes = await getUnarchievedNotes(userId);
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const getByCathegoryNoteHandler = async (req, res) => {
    try {
        const { cathegoryId } = req.query;
        const notes = await getByCathegoryNote(cathegoryId);
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const toggleArchiveStatusHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { archieved } = req.body;
        const message = await toggleArchiveStatus(id, archieved);
        res.status(200).json({ message });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

export { createNoteHandler, deleteNoteHandler, editNoteHandler, getAllNotesHandler, getArchievedNotesHandler, getByCathegoryNoteHandler, getByUserHandler, toggleArchiveStatusHandler, getUnarchievedNotesHandler };
