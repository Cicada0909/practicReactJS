import React from 'react'
import styles from './ToDoListItem.module.css'

const ToDoListItem = (props) => {
    return (
        <div className={styles.wrapper}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default ToDoListItem