import React from 'react';
import PropTypes from 'prop-types';

const WelcomeBanner = () => {
    return (
        <div className="relative flex h-svh bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 pt-32 rounded-lg shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-30">
            </div>
            <div className="relative z-10 text-center flex items-center gap-5">
                <h1 className="text-6xl font-extrabold mb-6 leading-tight px-16">
                    Elevate Your Productivity with NotesApp
                </h1>
                <p className="text-lg mb-8 max-w-4xl mx-auto ">
                    Discover the ultimate tool for organizing your life. NotesApp offers a seamless way to manage your notes, tasks, and ideas, all in one place. Whether you're working on a project, planning your day, or jotting down thoughts, NotesApp is here to help you stay organized and focused.
                </p>
            </div>
        </div>
    );
};

WelcomeBanner.propTypes = {};

export default WelcomeBanner;