import axios from 'axios';

const CreateNote = async (noteData) => {
    try {
        console.log(noteData)
        const response = await axios.post('http://localhost:3000/api/notes/insert', noteData);
        console.log('Note created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw new Error('Failed to create the note');
    }
};

const UpdateNote = async (noteData) => {
    try {
        const { id, ...updateData } = noteData;
        const response = await axios.put(`http://localhost:3000/api/notes/edit/${id}`, updateData);
        console.log('Note updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw new Error('Failed to update the note');
    }
};

const DeleteNote = async (noteid) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/notes/delete/${noteid}`);
        console.log('Note deleted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting note:', error);
        throw new Error('Failed to delete the note');
    }
};

export { CreateNote, UpdateNote, DeleteNote };
