import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Todo } from '../types';

type TodoList = {
	todos: Todo[];
	completeTodos: Todo[];
};

const initialState: TodoList = {
	todos: [],
	completeTodos: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<Todo>) {
			state.todos = [...state.todos, action.payload];
		},

		completeTodo(state, action: PayloadAction<string>) {
			const todoId = action.payload;
			const todoToComplete = state.todos.find(todo => todo.id === todoId);

			if (todoToComplete) {
				todoToComplete.completed = !todoToComplete.completed;

				// Проверяем, completed === true или false
				if (todoToComplete.completed) {
					// Перемещаем задачу в completeTodos
					state.completeTodos.push(todoToComplete);
					state.todos = state.todos.filter(todo => todo.id !== todoId);
				} else {
					// Перемещаем задачу обратно в todos
					state.todos.push(todoToComplete);
					state.completeTodos = state.completeTodos.filter(todo => todo.id !== todoId);
				}
			}
		},
	},
});

export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
