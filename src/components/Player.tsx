import styled from 'styled-components';
import Avatar from '../assets/images/avatar.png'

const PlayerFrame = styled.section`
	flex-basis: 25rem;
  flex-direction: column;
  gap: 2rem;
`; 

const Player: React.FC = () => {
	return <PlayerFrame>
    <h3>DStarky</h3>
    <img src={Avatar} alt="avatar of user" />
    {/* <ProgressBar /> */}
    <p>lvl 0</p>
  </PlayerFrame>;
};
export default Player;
