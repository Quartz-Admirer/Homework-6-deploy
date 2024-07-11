import React from 'react';
import axios from 'axios';
import '../../styles/globals.css';

import ComicPage from '../../components/ComicPage';
import NavComponent from "@/components/NavComponent";

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
    return (<><NavComponent/><ComicPage comic={comic}/></>);
};

export async function getServerSideProps() {
    const comicData = await fetchComicData();
    return { props: { comic: comicData } };
}

export default ComicPageWrapper;
