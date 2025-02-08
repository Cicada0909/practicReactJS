import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsersListItem from '../../components/UsersListItem/UsersListItem';

const User = () => {
    const { id } = useParams();

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const GetUserData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            const data = await res.json();
            setUserData(data)
        }

        GetUserData();
    }, [id]);

    return (
        <div>
            <UsersListItem
                id={userData.id}
                name={userData.name}
                phone={userData.phone}
                website={userData.website}
            />
        </div>
    )
}


export default User