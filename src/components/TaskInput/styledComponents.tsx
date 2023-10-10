import styled from 'styled-components';
import { variables } from '../../styles/theme';
import { device } from '../../styles/breakpoint';

export const AddForm = styled.form`
	margin: 2rem 0;
	display: flex;
	gap: 1rem;
	flex-direction: column;

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

export const InputWrapper = styled.div`
	flex-grow: 1;
	position: relative;
`;

export const InputIcons = styled.div`
	position: absolute;
	right: 1.5rem;
	top: calc(50% - 12px);
	display: flex;
	gap: 1rem;

	svg {
		cursor: pointer;
	}
`;

export const AddInput = styled.input`
	padding: 1.2rem 10rem 1.2rem 2.4rem;
	transition: width 0.3s ease;
	border: 1px solid #000;
	border-radius: 0.6rem;
	width: 100%;

	&:focus {
		outline: none;
		border: 1px solid ${variables.colorBgRed};

		&::placeholder {
			color: transparent;
		}
	}
`;

export const AddButton = styled.button`
	padding: 1.2rem 2.4rem;
	border-radius: 0.6rem;
	border: 1px solid transparent;
	background-color: ${variables.colorBgRed};
	color: #fff;
	cursor: pointer;
	transition: transform 0.2s ease;

	@media (any-hover: hover) {
		&:hover {
			transform: translateY(-0.4rem);
		}
	}

	&:active {
		transform: translateY(0);
	}
`;

export const CoinsCount = styled.span`
	font-size: 2.2rem;
	font-weight: 400;
	display: flex;
	gap: 0.5rem;
`;
