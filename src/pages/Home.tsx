import TaskInput from '../components/TaskInput/TaskInput';
import TodoList from '../components/TodoList';
import styled from 'styled-components';

const MyAccordionHeader = styled.div`
	border: none;
	outline: none;

	/* background-color: red; */
`;

const Home: React.FC = () => {
	return (
		<section style={{ width: '100%' }}>
			<h2>Главная страница</h2>
			<TaskInput />
			<TodoList type='uncompleted' />
			<TodoList type='completed' />
		</section>
	);
};
export default Home;
