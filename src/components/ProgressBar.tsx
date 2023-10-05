import styled from 'styled-components';
import { variables } from '../styles';

const Outer = styled.div`
	width: 100%;
	height: 1rem;
	border-radius: 1rem;
	background-color: ${variables.colorBgGray};
`;

const ProgressBar: React.FC = () => {
  return (
    <Outer />
  )
}
export default ProgressBar