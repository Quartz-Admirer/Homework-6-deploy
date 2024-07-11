import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import NavComponent from "@/components/NavComponent";
import Image from "next/image";
export const metadata = {
    title: 'Oleg Shchendrigin',
    description: 'Graphic Designer Portfolio',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="author" content="Oleg Shchendrigin" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
        <div>
            <header>
                <Image width={1000} height={1000} src="/ava_wb.jpg" className="avatar" alt="Oleg Shchendrigin" />
                <h1>Oleg Shchendrigin</h1>
            </header>
            <NavComponent />
            <main>{children}</main>
        </div>
        </body>
        </html>
    );
};

export default Layout;
