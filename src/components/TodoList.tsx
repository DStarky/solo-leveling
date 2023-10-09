import { useAppSelector } from '../hooks';
import { selectTodo } from '../store/todoSlice';

const TodoList = () => {
	const { todos } = useAppSelector(selectTodo);

	return (
		<ul>
			{todos.map(item => {
				return <li>{item.text}</li>;
			})}
		</ul>
	);
};
export default TodoList;
