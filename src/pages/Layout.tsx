import { Outlet } from 'react-router';
import styled from 'styled-components';
import { device } from '../styles/breakpoint';
import Player from '../components/Player/Player';
import { Link } from 'react-router-dom';

const Container = styled.div`
	margin: 3rem auto;
	padding: 0 3rem;
	max-width: 100%;
	@media ${device.desktop} {
		max-width: 120rem;
	}
`;

const MainFlex = styled.section`
	display: flex;
	gap: 5rem;
	align-items: center;
	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const Layout: React.FC = () => {
	return (
		<Container>
			<Link to='/'>
				<h1>Поднятие уровня в одиночку</h1>
			</Link>
			<MainFlex>
				<Player />
				<Outlet />
			</MainFlex>
		</Container>
	);
};
export default Layout;
