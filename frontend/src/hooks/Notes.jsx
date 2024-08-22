import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Notes = (archieved ) => {
    const userid = useSelector((state) => state.user.id);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNotes = async (archived) => {
        if (!userid) return;
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:3000/api/notes/${archived ? 'archived' : 'unarchived'}/${userid}`);
            setNotes(response.data || []); 
        } catch (err) {
            setError('Error fetching notes');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes(archieved);
    }, [archieved]); 

    return { notes, loading, error, refetchNotes: fetchNotes };
};

export default Notes;
