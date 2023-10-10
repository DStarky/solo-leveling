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
		toggleTodo(state, action: PayloadAction<Todo>) {
			const { id: todoId } = action.payload;

			// Ищем задачу в обоих списках
			const todoInTodos = state.todos.find(todo => todo.id === todoId);
			const todoInCompleteTodos = state.completeTodos.find(todo => todo.id === todoId);

			if (todoInTodos) {
				todoInTodos.completed = !todoInTodos.completed;

				// Проверяем, completed === true или false
				if (todoInTodos.completed) {
					// Перемещаем задачу в начало completeTodos

					state.completeTodos.unshift(todoInTodos);
					state.todos = state.todos.filter(todo => todo.id !== todoId);
				} else {
					// Перемещаем задачу обратно в начало todos
					state.todos.unshift(todoInTodos);
					state.completeTodos = state.completeTodos.filter(todo => todo.id !== todoId);
				}
			} else if (todoInCompleteTodos) {
				todoInCompleteTodos.completed = !todoInCompleteTodos.completed;

				// Проверяем, completed === true или false
				if (!todoInCompleteTodos.completed) {
					// Перемещаем задачу обратно в начало todos
					state.todos.unshift(todoInCompleteTodos);
					state.completeTodos = state.completeTodos.filter(todo => todo.id !== todoId);
				} else {
					// Перемещаем задачу в начало completeTodos
					state.completeTodos.unshift(todoInCompleteTodos);
					state.todos = state.todos.filter(todo => todo.id !== todoId);
				}
			}
		},
	},
});

export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
