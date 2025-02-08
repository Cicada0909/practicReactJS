import React from 'react'
import styles from './UsersListItem.module.css'
import { Link } from 'react-router-dom'

const UsersListItem = (props) => {
    console.log(props);
    
    return (
        <div className={styles.wrapper}>
            <Link to={`/user/${props.id}`}>{props.name}</Link>
            <ul>
                <li>{props.phone}</li>
                <li>{props.website}</li>
            </ul>
        </div>
    )
}

export default UsersListItem