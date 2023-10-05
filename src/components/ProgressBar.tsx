import styled from 'styled-components';
import { variables } from '../styles/theme';
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
	margin-bottom: 1rem;

	&::after {
		content: '';
		background-color: ${variables.colorBgRed};
		height: 100%;
		width: ${props => (props.currentExperience / props.nextLevelExperience) * 100}%;
		position: absolute;
    left: 0;
		border-radius: inherit;
	}
`;

const ProgressBar: React.FC = () => {
	const { currentExperience, nextLevelExperience } = useAppSelector(selectUser);

	return (
		<div style={{ width: '100%', textAlign: 'center' }}>
			<Progress
				currentExperience={currentExperience}
				nextLevelExperience={nextLevelExperience}
				title={`${currentExperience} / ${nextLevelExperience}`}
			/>
			<p style={{ fontSize: '1.2rem' }}>{`${currentExperience} / ${nextLevelExperience}`}</p>
		</div>
	);
};
export default ProgressBar;
