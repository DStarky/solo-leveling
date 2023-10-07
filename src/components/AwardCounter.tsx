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

interface AwardCounterProps {
	currentTask: Todo;
	setCurrentTask: React.Dispatch<React.SetStateAction<Todo>>;
}

const AwardCounter: React.FC<AwardCounterProps> = ({ currentTask, setCurrentTask }) => {
	const incrementAward = () => {
		setCurrentTask(prevTask => ({
			...prevTask,
			award: prevTask.award + 1,
		}));
	};

	const decrementAward = () => {
		setCurrentTask(prevTask => ({
			...prevTask,
			award: prevTask.award - 1,
		}));
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<MyButton onClick={decrementAward}>-</MyButton>
			<span style={{ fontSize: '2rem' }}>{currentTask.award}</span>
			<MyButton onClick={incrementAward}>+</MyButton>
		</div>
	);
};

export default AwardCounter;
