import axiosInstance from "../api/axiosInstance";

const userService = {
    getUsers: () => axiosInstance.get('/users'),
    getUserById: (id: number) => axiosInstance.get('/users/${id}'),
    createUser: (data: string) => axiosInstance.post('/users', data),
    updateUser: (id: number, data: string) => axiosInstance.put('/users/${id}', data),
    deleteUser: (id: number) => axiosInstance.delete('/users/${id}'),
};

export default userService;