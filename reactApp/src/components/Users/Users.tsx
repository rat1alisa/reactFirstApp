import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { deleteUser, fetchUsers } from 'store/reducers/usersSlice';
import "./Users.css";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const UserList: React.FC = () => {
const dispatch = useDispatch<AppDispatch>();
const { users, loading, error } = useSelector((state: RootState) => state.users);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  const handleSearchChange = (event: InputChangeEvent) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="">
      <h2 className="">Список пользователей</h2>

      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск по имени или email"
        value={searchTerm}
        onChange={handleSearchChange}
        className=""
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="p-2 border-b flex justify-between">
              <span>{user.name} ({user.email})</span>
              <button 
                className=""
                onClick={() => dispatch(deleteUser(user.id))}
              >
                Удалить
              </button>
            </li>
          ))
        ) : (
          <p>Пользователи не найдены</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
/*interface User{
    id: number;
    name: string;
    email: string;
}

const Users = () => {

    const dispatch = useDispatch();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data: User[]) => setUsers(data));
    }, [])

    useEffect (() => {
        const fetchUsers = async () => {
            try{
                const response = await axiosInstance.get('/users');
                const names = response.data.map((user) => user.name);
                // dispatch(setUsers(names));
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Ошибка загрузки пользователей: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [dispatch]);

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <h1 className='text'>Список пользователей</h1>
            <ul className='list'>
            {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
            ))}
            </ul>
        </div>
    );
};

export default Users;*/