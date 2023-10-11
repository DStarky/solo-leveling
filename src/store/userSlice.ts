import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Todo } from '../types';

export type User = {
	name: string;
	level: number;
	currentExperience: number;
	nextLevelExperience: number;
	avatarPath: string;
	coins: number;
	spentCoins: number;
};

export const difficultyPoints: Record<Todo['difficult'], number> = {
	ease: 1,
	medium: 2,
	hard: 3,
};

const initialState: User = {
	name: 'Username',
	level: 0,
	currentExperience: 0,
	nextLevelExperience: 10,
	avatarPath: 'avatar-1.png',
	coins: 0,
	spentCoins: 0,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		changeAvatar(state, action: PayloadAction<string>) {
			state.avatarPath = action.payload;
		},
		updateCoinsAndExp(state, action: PayloadAction<{ coins: number; exp: number }>) {
			state.coins = action.payload.coins - state.spentCoins;
			state.currentExperience = action.payload.exp;
		},
	},
});

export const selectUser = (state: RootState) => state.user;
export const { changeName, changeAvatar, updateCoinsAndExp } = userSlice.actions;
export default userSlice.reducer;
