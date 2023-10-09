export interface Strings {
	[key: string]: string;
}

export type Todo = {
	id?: number;
	difficult: 'ease' | 'medium' | 'hard';
	coins: number;
	text: string;
};
