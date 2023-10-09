import styled from 'styled-components';
import { Todo } from '../types';

const MyButton = styled.button`
	padding: 5px;
	border: none;
	outline: none;
	background-color: transparent;
	color: #fff;
	font-size: 2.4rem;
	cursor: pointer;
`;

interface CoinsCounterProps {
	currentTask: Todo;
	setCurrentTask: React.Dispatch<React.SetStateAction<Todo>>;
}

const CoinsCounter: React.FC<CoinsCounterProps> = ({ currentTask, setCurrentTask }) => {
	const incrementCoins = () => {
		setCurrentTask(prevTask => ({
			...prevTask,
			coins: prevTask.coins + 1,
		}));
	};

	const decrementCoins = () => {
		setCurrentTask(prevTask => ({
			...prevTask,
			coins: prevTask.coins - 1,
		}));
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<MyButton
				onClick={decrementCoins}
				disabled={currentTask.coins <= 0 ? true : false}>
				-
			</MyButton>
			<span style={{ fontSize: '2rem' }}>{currentTask.coins}</span>
			<MyButton onClick={incrementCoins}>+</MyButton>
		</div>
	);
};

export default CoinsCounter;
