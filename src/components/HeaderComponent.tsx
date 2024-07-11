import React from 'react';
import Image from 'next/image';

const HeaderComponent: React.FC = () => {
    return (
        <header>
            <Image src="/ava_wb.jpg" alt="Avatar" width={100} height={100} />
            <h1>Oleg Shchendrigin</h1>
        </header>
    );
};

export default HeaderComponent;
