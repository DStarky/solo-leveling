import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import todoReducer from './todoSlice';

const store = configureStore({
	reducer: {
		user: userReducer,
		todo: todoReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
