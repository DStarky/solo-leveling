import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { selectTodo } from '../store/todoSlice';
import TodoItem from './TodoItem';

const TodoListUl = styled.ul`
	list-style-type: none;
`;

interface ITodoListProps {
	isCompletedList?: boolean;
}

const TodoList: React.FC<ITodoListProps> = ({ isCompletedList }) => {
	const { todos, completeTodos } = useAppSelector(selectTodo);

	// Если это список завершенных, возвращаем этот рендер
	if (isCompletedList) {
		return (
			<TodoListUl>
				{completeTodos.map(item => {
					return (
						<TodoItem
							key={item.id}
							{...item}
						/>
					);
				})}
			</TodoListUl>
		);
	}

	// В противном случае обычный список
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
