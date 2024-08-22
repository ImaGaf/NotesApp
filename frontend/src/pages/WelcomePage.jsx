import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader'
import WelcomeBanner from '../components/WelcomeBanner';

const WelcomePage = () => {
    return (
        <>
            <WelcomeHeader />
            <WelcomeBanner />
        </>
    );
};

WelcomePage.propTypes = {};

export default WelcomePage;
