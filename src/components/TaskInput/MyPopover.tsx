import styled from 'styled-components';
import { variables } from '../../styles/theme';

interface IMyPopoverProps {
	children?: React.ReactNode;
}

const PopoverWrapper = styled.div`
	background-color: ${variables.colorBgRed};
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 1rem;
	position: relative;
	color: #fff;
	border-radius: 0.6rem;

	&::after {
		content: '';
		border: 1.5rem solid transparent;
		border-bottom: 1.5rem solid ${variables.colorBgRed};
		position: absolute;
		top: -3rem;
		left: 50%;
		transform: translateX(-50%);
	}

	svg {
		cursor: pointer;
	}
`;

const MyPopover: React.FC<IMyPopoverProps> = ({ children }) => {
	return <PopoverWrapper>{children}</PopoverWrapper>;
};
export default MyPopover;
