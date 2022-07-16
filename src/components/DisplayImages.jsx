import React from 'react';
import ImageItem from './ImageItem';
import { useEffect, useState } from "react";

const DisplayImages = ({ category }) => {

    loadInfo(category);

    const [data, setResult] = useState(null);
    useEffect(() => {
        loadInfo(category);
    }, [category]);

    async function loadInfo(category) {
        try {
            const data = await
                fetch(`https://api.unsplash.com/search/photos?query=${category}&client_id=0j-iiYbuU8qQsQiSN14wF4D9rw8M6iUT0QbZADx72rs&per_page=20`);
            const response = await data.json();
            console.log(response.results)
            setResult(response.results)
        } catch (error) { console.log(error) }
    }

    return (
        <div className='container'>
            {
                data &&
                data.map(img => (
                    <ImageItem key={img.id} title={img.alt_description} url={img.urls.small} />
                ))
            }
        </div>
    );
}

export default DisplayImages;