import React, { useEffect, useState } from 'react';
import Category from '../hooks/Category';
import { useSelector } from 'react-redux';

const Sheet = ({ note, onClose, onSave }) => {
    const userid = useSelector((state) => state.user.id);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    const {
        categories,
        newCategory,
        setNewCategory,
        isCategoryLoading,
        categoryError,
        handleAddCategory
    } = Category();

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
            setSelectedCategoryId(note.cathegoryid || '');
        } else {
            setTitle('');
            setContent('');
            setSelectedCategoryId('');
        }
    }, [note]);

    const handleSave = () => {
        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill out both fields.');
            return;
        }
        onSave({
            title,
            content,
            cathegoryid: selectedCategoryId,
            userid,
            archieved: false,
            id: note?.id
        });
    };

    return (
        <div className='flex fixed w-full items-center justify-center bg-white-10 h-calc-100vh-minus-10rem top-24 left-0'>
            <div className="container rounded-3xl mx-auto h-4/5 p-6 max-w-4xl bg-gray-100 flex flex-col">
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
                    <div className="flex items-center p-4 border-b border-gray-300 bg-gray-50 justify-between">
                        <div>
                            <button
                                className="text-green-600 hover:bg-gray-200 p-2 rounded-3xl px-4"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            {note && (
                                <button
                                    className="text-red-600 hover:bg-gray-200 p-2 rounded-3xl ml-2"
                                    onClick={() => onSave({ id: note.id, delete: true })}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                        <div className="p-4 flex bg-gray-50 gap-4 items-center">
                            <select
                                value={selectedCategoryId}
                                onChange={(e) => setSelectedCategoryId(e.target.value)}
                                className="block w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select a category</option>
                                {isCategoryLoading ? (
                                    <option>Loading categories...</option>
                                ) : (
                                    categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.cathegory}
                                        </option>
                                    ))
                                )}
                            </select>
                            {categoryError && <p className="text-red-600 text-sm mt-2">{categoryError}</p>}
                            <div className="flex items-center h-4 ">
                                <input
                                    type="text"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="p-2 border border-gray-300 rounded-md"
                                    placeholder="New category"
                                />
                                <button
                                    className="text-black hover:bg-gray-200 px-4 rounded-3xl ml-2"
                                    onClick={handleAddCategory}
                                >
                                    Add Category
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                className="text-red-600 hover:bg-gray-200 p-2 rounded-3xl px-4 ml-2"
                                onClick={onClose}
                            >
                                Leave
                            </button>
                        </div>
                    </div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-4 text-2xl font-semibold border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0"
                        placeholder="Title here"
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-4 text-lg text-gray-800 bg-transparent min-h-[300px] resize-none focus:outline-none focus:ring-0"
                        placeholder="Content here"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sheet;
