import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Todo } from '../types';

type TodoList = {
	todos: Todo[];
};

const initialState: TodoList = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<Todo>) {
			state.todos = [...state.todos, action.payload];
		},

		completeTodo(state, action: PayloadAction<string>) {
			const checkedTodo = state.todos.find(el => el.id === action.payload);
			if (checkedTodo) checkedTodo.completed = !checkedTodo.completed;
		},
	},
});

export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
