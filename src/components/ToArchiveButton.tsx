import styled from 'styled-components';
import { variables } from '../styles/theme';
import { Todo } from '../types';
import { useAppDispatch } from '../hooks';
import { toArchive } from '../store/todoSlice';

export const ArchiveButton = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	background-color: ${variables.colorBgRed};
	padding: 0.6rem 1.2rem;
	border-radius: 0.4rem;
	color: #fff;
	font-size: 1rem;
	transition: filter 0.2s ease;
	text-transform: uppercase;
	flex-shrink: 0;

	@media (any-hover: hover) {
		&:hover {
			filter: brightness(1.1);
		}
	}
`;

interface IToArchiveButtonProps {
	id: Todo['id'];
}

const ToArchiveButton: React.FC<IToArchiveButtonProps> = ({ id }) => {
	const dispatch = useAppDispatch();

	const clickHandler = () => {
		dispatch(toArchive(id));
	};

	return <ArchiveButton onClick={clickHandler}>В архив</ArchiveButton>;
};
export default ToArchiveButton;
