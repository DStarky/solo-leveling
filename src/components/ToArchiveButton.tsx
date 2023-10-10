import styled from 'styled-components';
import { variables } from '../styles/theme';

const ArchiveButton = styled.button`
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

	@media (any-hover: hover) {
		&:hover {
			filter: brightness(1.1);
		}
	}
`;

const ToArchiveButton = () => {
	return <ArchiveButton>В архив</ArchiveButton>;
};
export default ToArchiveButton;
