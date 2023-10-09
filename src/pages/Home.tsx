import TaskInput from '../components/TaskInput/TaskInput';
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
	return (
		<section style={{ width: '100%' }}>
			<h2>Главная страница</h2>
			<TaskInput />
			<TodoList />
		</section>
	);
};
export default Home;
