import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { selectTodo } from '../store/todoSlice';
import TodoItem from './TodoItem';

const TodoListUl = styled.ul`
	list-style-type: none;
`;

const TodoList = () => {
	const { todos } = useAppSelector(selectTodo);

	return (
		<TodoListUl>
			{todos.map(item => {
				return (
					<TodoItem
						key={item.id}
						{...item}
					/>
				);
			})}
		</TodoListUl>
	);
};
export default TodoList;
