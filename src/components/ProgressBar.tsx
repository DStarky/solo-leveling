import styled from 'styled-components';
import { variables } from '../styles/theme';
import { useAppSelector } from '../hooks';
import { selectUser } from '../store/userSlice';

interface ProgressProps {
	currentexperience: number;
	nextlevelexperience: number;
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
		width: ${props => (props.currentexperience / props.nextlevelexperience) * 100}%;
		position: absolute;
		left: 0;
		border-radius: inherit;
	}
`;

const ProgressBar: React.FC = () => {
	const { currentExp: currentexperience, nextLevelExp: nextlevelexperience } = useAppSelector(selectUser);

	return (
		<div style={{ width: '100%', textAlign: 'center' }}>
			<Progress
				currentexperience={currentexperience}
				nextlevelexperience={nextlevelexperience}
				title={`${currentexperience} / ${nextlevelexperience}`}
			/>
			<p style={{ fontSize: '1.2rem' }}>{`${currentexperience} / ${nextlevelexperience}`}</p>
		</div>
	);
};
export default ProgressBar;
