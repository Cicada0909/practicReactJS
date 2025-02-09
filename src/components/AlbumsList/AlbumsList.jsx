import React, { useEffect, useState } from 'react'
import styles from './AlbumsList.module.css'
import AlbumsListItem from '../AlbumsListItem/AlbumsListItem'

const AlbumsList = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/albums");

                const data = await res.json();
                setAlbums(data);
            } catch {
                console.log("error");
                
            } finally {
                setIsLoading(false);
            }
        }
        fetchAlbums();
    }, []);

    if (isLoading) {
        return (
            <div>
                Идет загрузка...
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {albums.map((item) => (
                <AlbumsListItem 
                    key={item.id} 
                    {...item}
                />
            ))}
        </div>
    )
}

export default AlbumsList