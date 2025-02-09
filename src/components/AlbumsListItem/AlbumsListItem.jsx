import React from 'react'
import styles from './AlbumsListItem.module.css'
import { Link } from 'react-router-dom'

const AlbumsListItem = (props) => {
    return (
        <div className={styles.wrapper}>
            <Link to={`/albums/${props.id}`}>{props.title}</Link>
        </div>
    )
}

export default AlbumsListItem