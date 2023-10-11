import styled from "styled-components";

export const PlayerFrame = styled.section`
	flex-basis: 32rem;
	flex-shrink: 0;
	flex-grow: 0;
	max-width: 32rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const UsernameBlock = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

export const AvatarCover = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;
	border-radius: 50%;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 20%;
		background-color: rgba(1, 1, 1, 0.3);
		bottom: -100%;
		left: 0;
		transition: bottom 0.3s ease;
	}

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url('/icons/pen-square.svg');
		background-repeat: no-repeat;
		background-position: center 93%;
		/* background-size: 30%; */
		bottom: -100%;
		left: 0;
		transition: bottom 0.3s ease;
	}

	&:hover::after,
	&:hover::before {
		bottom: 0;
	}
`;

export const PlayerInfo = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 1rem;
	align-items: center;
`;
