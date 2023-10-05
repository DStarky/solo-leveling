import styled from 'styled-components';
import { variables } from '../styles';

const Outer = styled.div`
	width: 100%;
	height: 1rem;
	border-radius: 1rem;
	background-color: ${variables.colorBgGray};
	position: relative;

	&::after {
		content: '';
		background-color: ${variables.colorBgRed};
		height: 100%;
		width: 30%;
		position: absolute;
		border-radius: inherit;
	}
  
`;

const ProgressBar: React.FC = () => {
  return (
    <Outer />
  )
}
export default ProgressBar