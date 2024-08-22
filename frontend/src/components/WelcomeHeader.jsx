import React from 'react';
import useNavigate from '../hooks/Navigate'; 

const Welcome = () => {
    const { handleLoginButton, handleRegisterButton } = useNavigate();

    return (
        <div className='flex w-screen justify-center fixed py-6 font-extrabold leading-tight bg-slate-100 z-50'>
            <div className='text-black text-3xl'>
                <h1>NOTESAPP</h1>
            </div>
            <div className='flex justify-end absolute right-28 gap-10 items-center'>
                <button className='text-white bg-red-700 py-3 px-4 rounded-full hover:bg-red-600'
                    onClick={handleRegisterButton}>Register</button>
                <button className='text-white bg-red-700 py-3 px-4 rounded-full hover:bg-red-600'
                    onClick={handleLoginButton}>Login</button>
            </div>
        </div>
    );
};

export default Welcome;
