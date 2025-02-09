import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhotosListItem from '../../components/PhotosListItem/PhotosListItem';

const Album = () => {
    const { id } = useParams();

    const [photosData, setPhotosData] = useState([]);

    useEffect(() => {
        const GetPhotosData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);

            const data = await res.json();
            setPhotosData(data)
        }

        GetPhotosData();
    }, []);

    const filteredPhotos = photosData.filter((photo) => photo.albumId === Number(id));

    return (
        <div>
            {filteredPhotos.map((item) => (
                <PhotosListItem
                    {...item}
                />
            ))}
        </div>
    )
}

export default Album