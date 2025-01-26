import axiosInstance from "../api/axiosInstance";

const userService = {
    getUsers: () => axiosInstance.get('/users'),
    getUserById: (id) => axiosInstance.get('/users/${id}'),
    createUser: (data) => axiosInstance.post('/users', data),
    updateUser: (id, data) => axiosInstance.put('/users/${id}', data),
    deleteUser: (id) => axiosInstance.delete('/users/${id}'),
};

export default userService;