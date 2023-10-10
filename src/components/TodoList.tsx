import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { selectTodo } from '../store/todoSlice';
import TodoItem from './TodoItem';
import { Todo } from '../types';

const TodoListUl = styled.ul`
	list-style-type: none;
`;

interface ITodoListProps {
	type: 'all' | 'uncompleted' | 'completed' | 'archive';
}

const TodoList: React.FC<ITodoListProps> = ({ type }) => {
	const { todos, completeTodos } = useAppSelector(selectTodo);

	type ILists = {
		[K in ITodoListProps['type']]?: Todo[];
	};

	const LISTS: ILists = {
		uncompleted: todos,
		completed: completeTodos,
		// OTHER WRITE LATER
	};

	const list = LISTS[type];

	return (
		<TodoListUl>
			{list &&
				list.map(item => {
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
