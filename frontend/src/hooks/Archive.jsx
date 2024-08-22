import axios from 'axios';

const Archive = async (noteId, newStatus) => {
    try {
        const response = await axios.put(`http://localhost:3000/api/notes/archive/${noteId}`, { archieved: newStatus });
        console.log('Note archive status updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating archive status:', error);
        throw new Error('Failed to update archive status');
    }
};


export default Archive;