import React from 'react';
import '../styles/globals.css';
import Image from "next/image";
const PortfolioComponent: React.FC = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>My works</h2>
            <div className="portfolio-item">
                <p>Coffee logo</p>
                <Image width={1000} height={570} src="/Coffee%20logo.png" alt="Coffee logo"/>
            </div>
            <div className="portfolio-item">
                <p>Edtech logo</p>
                <Image width={1000} height={600} src="/DataSculptor.png" alt="Data Sculptor"/>
            </div>
        </section>
    );
};

export default PortfolioComponent;
