import React from 'react'
import styles from './PhotosListItem.module.css'

const PhotosListItem = (props) => {
    return (
        <div className={styles.wrapper}>
            <ul>
                <li>{props.title}</li>
                <li>{props.thumbnailUrl}</li>
            </ul>
        </div>
    )
}

export default PhotosListItem