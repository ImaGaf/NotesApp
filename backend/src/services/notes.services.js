import Note from "../models/notes";
import Cathegory from "../models/cathegory";

const createNote = async (newNote) => {
    try {
        console.log(newNote)
        const cathegory = await Cathegory.findByPk(newNote.cathegoryid);
        if (!cathegory) {
            throw new Error('Invalid category ID');
        }
        console.log(newNote)
        return await Note.create(newNote);
    } catch (error) {
        console.log(error)
        throw new Error('Error creating note');
    }
};

const deleteNote = async (id) => {
    try {
        await Note.destroy({ where: { id } });
        return 'Note deleted successfully';
    } catch (error) {
        throw new Error('Error deleting note');
    }
};

const editNote = async (id, updatedData) => {
    try {
        await Note.update(updatedData, { where: { id } });
        return 'Note updated successfully';
    } catch (error) {
        throw new Error('Error updating note');
    }
};

const getAllNotes = async () => {
    try {
        return await Note.findAll();
    } catch (error) {
        throw new Error('Error fetching notes');
    }
};

const getByUser = async (userid) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }
        return await Note.findAll({ where: { userid } });
    } catch (error) {
        throw new Error('Error fetching notes for user');
    }
};

const getArchievedNotes = async (userid) => {
    try {
        if (!userid) {
            throw new Error('User ID is required');
        }
        return await Note.findAll({
            where: {
                archieved: true,
                userid: userid
            }
        });
    } catch (error) {
        throw new Error('Error fetching archived notes');
    }
};

const getUnarchievedNotes = async (userid) => {
    try {
        if (!userid) {
            throw new Error('User ID is required');
        }
        return await Note.findAll({
            where: {
                archieved: false,
                userid: userid
            }
        });
    } catch (error) {
        throw new Error('Error fetching unarchived notes');
    }
};

const getByCathegoryNote = async (cathegoryid) => {
    try {
        return await Note.findAll({ where: { cathegoryid } });
    } catch (error) {
        throw new Error('Error fetching notes by category');
    }
};

const toggleArchiveStatus = async (id, archieved) => {
    try {
        if (typeof archieved !== 'boolean') {
            throw new Error('Invalid value for archieved status');
        }
        const [updated] = await Note.update({ archieved }, { where: { id } });
        if (updated) {
            return 'Archive status updated successfully';
        } else {
            throw new Error('Note not found');
        }
    } catch (error) {
        throw new Error('Error updating archive status');
    }
};

export { createNote, deleteNote, editNote, getAllNotes, getArchievedNotes, getByCathegoryNote, getByUser, toggleArchiveStatus, getUnarchievedNotes };
