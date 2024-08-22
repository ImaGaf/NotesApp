import React, { useState } from 'react';
import Archive from '../hooks/Archive';

const Note = ({ onSave, noteId, title, content, archieved, onEdit, onArchiveChange }) => {
    const [isArchieved, setIsArchieved] = useState(archieved);

    const handleArchive = async () => {
        try {
            const updatedStatus = !isArchieved;
            await Archive(noteId, updatedStatus);
            setIsArchieved(updatedStatus);
            if (onArchiveChange) {
                onArchiveChange(); 
            }
        } catch (error) {
            console.error('Failed to update archive status', error);
        }
    };

    return (
        <div className="max-w-70 mb-3 max-h-96 bg-white shadow-xl rounded-3xl overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                <p className="max-h-56 text-gray-600 mb-5 text-sm leading-relaxed overflow-y-scroll no-scrollbar">{content}</p>
                <div className="flex justify-end text-xs mt-4 gap-2">
                    <button
                        className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none"
                        onClick={onEdit}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none"
                        onClick={() => onSave({ id: noteId, delete: true })}
                    >
                        Delete
                    </button>
                    <button
                        className={`py-2 px-4 rounded-full ${isArchieved ? 'bg-red-600' : 'bg-gray-600'} text-white hover:${isArchieved ? 'bg-red-700' : 'bg-gray-700'} focus:outline-none`}
                        onClick={handleArchive}
                    >
                        {isArchieved ? 'Unarchive' : 'Archive'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Note;
