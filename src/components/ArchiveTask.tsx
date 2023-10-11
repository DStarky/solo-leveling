import styled from 'styled-components';
import { Todo } from '../types';

const StyledArchiveTask = styled.li`
	border: 1px solid #000;
	margin-bottom: 1rem;
	padding: 1.2rem;
	border-radius: 1.2rem;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto auto auto;
  align-items: center;
	gap: 1.2rem;
`;

const ArchiveTask: React.FC<Todo> = ({ text, coins, completed, difficult }) => {
	return (
		<StyledArchiveTask>
			<p>{text}</p>
			<p>Выполнена: <strong>{completed ? 'да' : 'нет'}</strong></p>
			<p>Сложность: <strong>{difficult}</strong></p>
			<p>Награда: <strong>{coins}</strong></p>
		</StyledArchiveTask>
	);
};
export default ArchiveTask;
