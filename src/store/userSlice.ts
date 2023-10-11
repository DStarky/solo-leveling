import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Todo } from '../types';

export type User = {
	name: string;
	level: number;
	currentExp: number;
	nextLevelExp: number;
	accExp: number;
	avatarPath: string;
	coins: number;
	spentCoins: number;
};

export const difficultyPoints: Record<Todo['difficult'], number> = {
	ease: 1,
	medium: 2,
	hard: 3,
};

const levels: Record<number, number> = {
	0: 10,
	1: 20,
	2: 40,
	3: 80,
	4: 160,
	5: 320,
};

function accExpByLevel(level: number): number {
	let totalExp = 0;

	for (let i = 0; i < level; i++) {
		if (levels[i] !== undefined) {
			totalExp += levels[i];
		}
	}

	return totalExp;
}

const initialState: User = {
	name: 'Username',
	level: 0,
	currentExp: 0,
	nextLevelExp: levels[0],
	avatarPath: 'avatar-1.png',
	coins: 0,
	spentCoins: 0,
	accExp: 0,
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
			state.accExp = action.payload.exp;
			state.currentExp = state.accExp - accExpByLevel(state.level);

			if (state.currentExp > state.nextLevelExp) {
				state.level += 1;
				state.nextLevelExp = levels[state.level];
				state.currentExp = state.accExp - accExpByLevel(state.level);
			}

			if (state.currentExp < 0) {
				state.level -= 1;
				state.nextLevelExp = levels[state.level];
				state.currentExp = state.accExp - accExpByLevel(state.level);
			}
		},
	},
});

export const selectUser = (state: RootState) => state.user;
export const { changeName, changeAvatar, updateCoinsAndExp } = userSlice.actions;
export default userSlice.reducer;
