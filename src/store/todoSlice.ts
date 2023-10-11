import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Todo } from '../types';

type TodoList = {
	todos: Todo[];
	completeTodos: Todo[];
	archive: Todo[];
};

const initialState: TodoList = {
	todos: [],
	completeTodos: [],
	archive: [],
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
		toArchive(state, action: PayloadAction<Todo['id']>) {
			const id = action.payload;
			const todoToArchive = state.todos.find(todo => todo.id === id) || state.completeTodos.find(todo => todo.id === id);
			console.log(todoToArchive || 'nothing');
			if (todoToArchive) {
				if (todoToArchive.completed) {
					// Если задача завершена
					// Удалим задачу из списка todos
					state.completeTodos = state.completeTodos.filter(todo => todo.id !== id);
				} else {
					// Если задача не завершена
					// Удалим задачу из списка completeTodos
					state.todos = state.todos.filter(todo => todo.id !== id);
				}
			}
		},
	},
});

export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, toggleTodo, toArchive } = todoSlice.actions;
export default todoSlice.reducer;
