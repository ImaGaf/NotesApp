import React, { useState, useEffect } from 'react';
import Note from './Note';
import Sheet from './Sheet';
import { CreateNote, UpdateNote, DeleteNote } from '../hooks/CrudNote';
import Notes from '../hooks/Notes';

const NoteList = ({ filter }) => {
    const [selectedNote, setSelectedNote] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newNote, setNewNote] = useState(false);
    const { notes, loading, error, refetchNotes } = Notes();

    useEffect(() => {
        const fetchNotes = async () => {
            if (filter === 'archieved') {
                await refetchNotes(true);
            } else {
                await refetchNotes(false);
            }
        };
        fetchNotes();
    }, [filter]);

    const handleEdit = (note) => {
        setSelectedNote(note);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedNote(null);
        setNewNote(false);
    };

    const handleNewNote = () => {
        setSelectedNote(null);
        setNewNote(true);
        setIsModalOpen(true);
    };

    const handleSaveNote = async (noteData) => {
        try {
            console.log(noteData)
            if (noteData.delete) {
                await DeleteNote(noteData.id);
            } else if (selectedNote) {
                await UpdateNote({ ...noteData, id: selectedNote.id });
            } else {
                await CreateNote(noteData);
            }
            await refetchNotes();
            handleCloseModal();
        } catch (error) {
            console.error('Error handling note:', error);
        }
    };

    const handleArchiveChange = async () => {
        await refetchNotes();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='px-32 columns-4 relative pt-20 mt-32 '>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <Note
                        key={note.id}
                        noteId={note.id}
                        title={note.title}
                        content={note.content}
                        archieved={note.archieved}
                        onEdit={() => handleEdit(note)}
                        onSave={handleSaveNote}
                        onArchiveChange={handleArchiveChange}
                    />
                ))
            ) : (
                <p>No notes available</p>
            )}
            {isModalOpen && (
                <Sheet
                    note={selectedNote}
                    onClose={handleCloseModal}
                    onSave={handleSaveNote}
                />
            )}
            <button
                className='bg-white text-red-400 font-semibold text-xl shadow-lg px-4 py-6 rounded-full hover:scale-110 focus:outline-none fixed bottom-14 right-20'
                onClick={handleNewNote}
            >
                New Note
            </button>
        </div>
    );
};

export default NoteList;
