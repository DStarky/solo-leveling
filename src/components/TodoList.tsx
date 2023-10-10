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
		[K in ITodoListProps['type']]?: [Todo[], string];
	};

	const LISTS: ILists = {
		uncompleted: [todos, 'Незавершенные задачи'],
		completed: [completeTodos, 'Завершенные задачи'],
		// OTHER WRITE LATER
	};

	const listAndTitle = LISTS[type];

	let list: Todo[] = [];
	let title: string = 'Заголовок';

	if (listAndTitle) {
		[list, title] = listAndTitle;
	}

return (
	<TodoListUl>
		{list.length > 0 && (
			<>
				<h3 style={{ margin: '2rem 0rem' }}>{title}</h3>
				{list.map(item => (
					<TodoItem
						key={item.id}
						{...item}
					/>
				))}
			</>
		)}
	</TodoListUl>
);
};
export default TodoList;
