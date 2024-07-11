import React from 'react';
import '../styles/globals.css';

const AboutComponent: React.FC = () => {
    return (
        <section id="about" className='about'>
            <h2>About me</h2>
            <p>My name is Oleg Shchendrigin. I am a graphic designer with many years of experience in creating unique visual
                solutions for various projects. My work covers a wide range of tasks, including logo design,
                creation of advertising materials, website design and much more. I strive for excellence in every project with an
                emphasis on creativity and quality.</p>
            <h3>My competencies include:</h3>
            <ul className='competencies'>
                <li>Brand Design</li>
                <li>UI/UX</li>
                <li>Layout</li>
                <li>Illustration</li>
                <li>3D Design</li>
            </ul>
        </section>
    );
};

export default AboutComponent;
