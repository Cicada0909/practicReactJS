import React, { useEffect, useState  } from 'react'
import styles from './ToDoList.module.css'
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const ToDoList = () => {
    const [ToDos, setToDos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");

                const data = await res.json();
                setToDos(data);
            } catch {
                console.log("error");
            } finally {
                setIsLoading(false);
            }
        }
        fetchTodos();
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
            {ToDos.map((item) => (
                <ToDoListItem 
                    key={item.id} 
                    {...item}
                />
            ))}
        </div>
    )
}

export default ToDoList