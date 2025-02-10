import React from 'react'
import styles from './Input.module.css'

const Input = ({
    id,
    placeholder, 
    type, 
    name, 
    labelText,
    onChange,
    value
}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{labelText}</label>
            <input 
                className={styles.input}
                id={id} 
                name={name} 
                type={type} 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                />
        </div>
    )
}

export default Input
