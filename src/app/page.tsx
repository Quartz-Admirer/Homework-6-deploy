import React from 'react';
import AboutComponent from '../components/AboutComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import ContactComponent from '../components/ContactComponent';

const Page: React.FC = () => {
    return (
        <>
            <main>
                <AboutComponent />
                <PortfolioComponent />
                <ContactComponent />
            </main>
        </>
    );
};

export default Page;

