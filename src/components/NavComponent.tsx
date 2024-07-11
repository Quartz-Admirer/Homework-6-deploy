// src/components/NavComponent.tsx
import React from 'react';
import Link from 'next/link';

const NavComponent: React.FC = () => {
    return (
        <nav>
            <Link href="/#about">About me</Link>
            <Link href="/#portfolio">My works</Link>
            <Link href="/#contact">Contacts</Link>
            <Link href="/comic">Comics</Link>
        </nav>
    );
};

export default NavComponent;
