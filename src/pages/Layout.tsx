import { Outlet } from 'react-router';
import styled from 'styled-components';
import { device } from '../styles/breakpoint';
import Player from '../components/Player';

const Container = styled.div`
	margin: 0 auto;
	padding: 0 3rem;
	max-width: 100%;
	@media ${device.desktop} {
		max-width: 120rem;
	}
`;

const MainFlex = styled.section`
	display: flex;
	gap: 2rem;
`;

const Layout: React.FC = () => {
	return (
		<Container>
			<MainFlex>
				<Player />
				<Outlet />
			</MainFlex>
		</Container>
	);
};
export default Layout;
