import React from 'react';
import Filter from './Filter';

const Header = ({ handleAll, handleArchieved }) => {
    return (
        <div className='fixed top-0 left-0 w-screen text-black text-3xl flex flex-col px-16 pt-8 z-50 shadow-sm bg-slate-100'>
            <div className='flex justify-start px-4 mb-8'>
                <div><h1>Notes</h1></div>
                <div className='text-xl flex gap-10 fixed right-24'>
                    <button
                        className='hover:bg-gray-500 py-2 px-4 rounded-3xl'
                        onClick={handleAll}
                    >
                        Active
                    </button>
                    <button
                        className='hover:bg-gray-500 py-2 px-4 rounded-3xl'
                        onClick={handleArchieved}
                    >
                        Archieved
                    </button>
                </div>
            </div>
            <Filter />
        </div>
    );
};

export default Header;
