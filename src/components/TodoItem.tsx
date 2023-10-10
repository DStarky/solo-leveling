import styled, { css } from 'styled-components';
import { Todo } from '../types';

import { variables } from '../styles/theme';
import DifficultIcon from './TaskInput/DifficultIcon';
import { CoinsCount } from './TaskInput/StyledComponents';
import { Coins } from 'lucide-react';
import { useAppDispatch } from '../hooks';
import { completeTodo } from '../store/todoSlice';
import ToArchiveButton from './ToArchiveButton';

const TodoItemLi = styled.li<{ completed: boolean }>`
	border: 1px solid ${variables.colorBgGray};
	border-radius: 0.6rem;
	padding: 1rem 1.5rem;
	transition: border 0.2s ease;
	display: flex;
	align-items: center;
	gap: 1rem;
	position: relative;

	${props =>
		props.completed &&
		css`
			color: ${variables.colorBgRed};
			background-color: ${variables.colorBgGray};
			.text {
				text-decoration: line-through;
			}
		`}

	@media (any-hover: hover) {
		&:hover {
			border: 1px solid #000;
		}
	}

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

const TodoItem: React.FC<Todo> = ({ coins, completed, difficult, text, id }) => {
	const dispatch = useAppDispatch();

	const checkboxHandler = () => {
		if (id) dispatch(completeTodo(id));
	};

	return (
		<TodoItemLi completed={completed}>
			<input
				type='checkbox'
				name=''
				id=''
				checked={completed}
				onChange={checkboxHandler}
			/>
			<p
				style={{ flexGrow: '1' }}
				className='text'>
				{text}
			</p>
			<ToArchiveButton />
			<CoinsCount>
				<p>{coins}</p>
				<Coins strokeWidth={1} />
			</CoinsCount>
			<DifficultIcon
				icon={difficult}
				completed={completed}
			/>
		</TodoItemLi>
	);
};
export default TodoItem;
