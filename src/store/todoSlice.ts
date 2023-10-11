import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Todo } from '../types';
import { updateCoinsAndExp } from './userSlice';

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
		toggleTodo(state, action: PayloadAction<Todo>) {
			const { id: todoId } = action.payload;

			// Найдем задачу в обоих списках
			const todoToUpdate = state.todos.find(todo => todo.id === todoId) || state.completeTodos.find(todo => todo.id === todoId);

			if (todoToUpdate) {
				// Изменим состояние задачи на противоположное
				todoToUpdate.completed = !todoToUpdate.completed;

				if (todoToUpdate.completed) {
					// Если задача теперь завершена, переместим её в начало списка completeTodos
					state.completeTodos.unshift(todoToUpdate);
					// Удалим задачу из списка todos
					state.todos = state.todos.filter(todo => todo.id !== todoId);
				} else {
					// Если задача теперь не завершена, переместим её в начало списка todos
					state.todos.unshift(todoToUpdate);
					// Удалим задачу из списка completeTodos
					state.completeTodos = state.completeTodos.filter(todo => todo.id !== todoId);
				}
			}
		},
	},
});

export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
