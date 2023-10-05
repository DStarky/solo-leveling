import styled from 'styled-components';
import Avatar from '../assets/images/avatar.png';
import ProgressBar from './ProgressBar';
import { useAppSelector } from '../hooks';

const PlayerFrame = styled.section`
	flex-basis: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const Player: React.FC = () => {
	const { name, level } = useAppSelector(state => state.user);

	return (
		<PlayerFrame>
			<h3>{name}</h3>
			<img
				src={Avatar}
				alt='avatar of user'
			/>
			<ProgressBar />
			<p>lvl {level}</p>
		</PlayerFrame>
	);
};
export default Player;
