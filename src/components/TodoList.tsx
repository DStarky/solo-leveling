import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { selectTodo } from '../store/todoSlice';

const TodoListUl = styled.ul`
	list-style-type: none;
`

const TodoList = () => {
	const { todos } = useAppSelector(selectTodo);

	return (
		<TodoListUl>
			{todos.map(item => {
				return <li>{item.text}</li>;
				//return <TodoItem {...item} />;
			})}
		</TodoListUl>
	);
};
export default TodoList;
