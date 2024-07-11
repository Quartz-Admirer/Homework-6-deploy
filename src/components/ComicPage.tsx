import React from 'react';

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

const ComicPage: React.FC<ComicPageProps> = ({ comic }) => {
    return (
        <div className="comic-container">
            <div className="comic-details">
                <h2 id="comic-title">{comic.safe_title}</h2>
                <p id="comic-date">
                    {new Date(
                        Date.UTC(
                            Number.parseInt(comic.year),
                            Number.parseInt(comic.month) - 1
                        )
                    ).toLocaleDateString(undefined, { month: 'numeric', year: 'numeric' })}
                </p>
                <img id="comic-image" src={comic.img} alt={comic.alt} />
                <p id="comic-alt">{comic.alt}</p>
            </div>
        </div>
    );
};

export default ComicPage;
