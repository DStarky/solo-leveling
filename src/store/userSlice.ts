import { Todo } from './../types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { toggleTodo } from './todoSlice';

export type User = {
	name: string;
	level: number;
	currentExperience: number;
	nextLevelExperience: number;
	avatarPath: string;
	coins: number;
};

const DIFFICULT_COST = {
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
	},
	extraReducers: builder => {
		builder.addCase(toggleTodo, (state, action: PayloadAction<Todo>) => {
			const { completed, coins, difficult } = action.payload;
			if (completed) {
				state.coins -= coins;
				state.currentExperience -= DIFFICULT_COST[difficult];
			} else {
				state.coins += coins;
				state.currentExperience += DIFFICULT_COST[difficult];
			}
		});
	},
});

export const selectUser = (state: RootState) => state.user;
export const { changeName, changeAvatar } = userSlice.actions;
export default userSlice.reducer;
