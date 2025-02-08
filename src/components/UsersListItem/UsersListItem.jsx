import React from 'react'
import styles from './UsersListItem.module.css'

const UsersListItem = (props) => {
    console.log(props);
    
    return (
        <div className={styles.wrapper}>
            <h4>{props.name}</h4>
            <ul>
                <li>{props.phone}</li>
                <li>{props.website}</li>
            </ul>
        </div>
    )
}

export default UsersListItem