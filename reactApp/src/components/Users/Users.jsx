import axios from 'axios';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import "./Users.css";

const Users = () => {

    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchUsers = async () => {
            try{
                const response = await axiosInstance.get('/users');
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Ошибка загрузки пользователей: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <h1 className='text'>Список пользователей</h1>
            <ul>
                {users.map((user) => {
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Users;