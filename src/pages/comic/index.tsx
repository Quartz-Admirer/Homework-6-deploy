import React from 'react';
import axios from 'axios';
import '../../styles/globals.css';

import ComicPage from '../../components/ComicPage';
import NavComponent from "@/components/NavComponent";
import Head from "next/head";

export const metadata = {
    title: 'Oleg Shchendrigin',
    description: 'Graphic Designer Portfolio',
};

type Comic = {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
};

type ComicPageProps = {
    comic: Comic;
};

const fetchComicData = async (): Promise<Comic> => {
    const email = 'o.shchendrigin@innopolis.university';
    const emailParam = new URLSearchParams({ email });
    const comicIdResponse = await axios.get(`https://fwd.innopolis.university/api/hw2?email=${emailParam}`);
    const comicId = comicIdResponse.data;

    const comicResponse = await axios.get(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    return comicResponse.data;
};

const ComicPageWrapper: React.FC<ComicPageProps> = ({ comic }) => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
                <meta name="author" content="Oleg Shchendrigin"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavComponent/>
            <ComicPage comic={comic}/>
        </>);
};

export async function getServerSideProps() {
    const comicData = await fetchComicData();
    return {props: {comic: comicData}};
}

export default ComicPageWrapper;
