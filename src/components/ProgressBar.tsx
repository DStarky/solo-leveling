import styled from 'styled-components';
import { variables } from '../styles';
import { useAppSelector } from '../hooks';
import { selectUser } from '../store/userSlice';

interface ProgressProps {
	currentExperience: number;
	nextLevelExperience: number;
}

const Progress = styled.div<ProgressProps>`
	width: 100%;
	height: 1rem;
	border-radius: 1rem;
	background-color: ${variables.colorBgGray};
	position: relative;

	&::after {
		content: '';
		background-color: ${variables.colorBgRed};
		height: 100%;
		width: ${props => (props.currentExperience / props.nextLevelExperience) * 100}%;
		position: absolute;
		border-radius: inherit;
	}
`;

const ProgressBar: React.FC = () => {
	const { currentExperience, nextLevelExperience } = useAppSelector(selectUser);

	return (
		<Progress
			currentExperience={currentExperience}
			nextLevelExperience={nextLevelExperience}
		/>
	);
};
export default ProgressBar;
