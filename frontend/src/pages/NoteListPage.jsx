import React, { useState } from 'react';
import Header from '../components/Header';
import NoteList from '../components/NoteList';

const NoteListPage = () => {
    const [filter, setFilter] = useState('active'); 
    const handleAll = () => {
        setFilter('active');
    };
    const handleArchieved = () => {
        setFilter('archieved');
    };

    return (
        <div>
            <Header
                handleAll={handleAll}
                handleArchieved={handleArchieved}
            />
            <NoteList filter={filter} />
        </div>
    );
};

export default NoteListPage;
