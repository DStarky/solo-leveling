import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export type User = {
	name: string;
	level: number;
	currentExperience: number;
	nextLevelExperience: number;
	avatarPath: string;
};

const initialState: User = {
	name: 'Username',
	level: 0,
	currentExperience: 7,
	nextLevelExperience: 10,
	avatarPath: 'avatar-1.png',
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
});

export const selectUser = (state: RootState) => state.user;
export const { changeName, changeAvatar } = userSlice.actions;
export default userSlice.reducer;
