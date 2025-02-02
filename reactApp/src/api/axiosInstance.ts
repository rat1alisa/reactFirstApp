import axios from 'axios';



const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    //headers: {'Autorization': 'Bearer token'}
});


export default axiosInstance;

/*const fetchData = async () => {
    try{
        const response = await axios.get();
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};


const sendData = async () => {
    try{
        const response = await axios.post('', {
            name: 'John',
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
sendData();*/