export interface Strings {
	[key: string]: string;
}

export type Todo = {
	id?: string;
	difficult: 'ease' | 'medium' | 'hard';
	coins: number;
	text: string;
	completed: boolean;
};
