import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/reducers/counterSlice'
import usersSlice from './store/reducers/usersSlice';


export default configureStore( {
    reducer: {
        counter: counterReducer,
        users: usersSlice,
    },
    devTools: true
});