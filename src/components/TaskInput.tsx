import styled from 'styled-components';
import { Popover } from 'react-tiny-popover';

import { device } from '../styles/breakpoint';
import { useState } from 'react';
import { Flame, Gem } from 'lucide-react';

const AddForm = styled.form`
	margin: 2rem 0;
	display: flex;
	gap: 1rem;
	flex-direction: column;

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

const InputWrapper = styled.div`
	flex-grow: 1;
	position: relative;
`;

const InputIcons = styled.div`
  position: absolute;
  right: 2rem;
  top: calc(50% - 12px);
  display: flex;
  gap: 1rem;
`

const AddInput = styled.input`
	padding: 1.2rem 2.4rem;
	transition: width 0.3s ease;
	border: 1px solid #000;
	border-radius: 0.6rem;
	width: 100%;

	&:focus {
		outline: none;
		border: 1px solid #d66572;

		&::placeholder {
			color: transparent;
		}
	}
`;

const AddButton = styled.button`
	padding: 1.2rem 2.4rem;
	border-radius: 0.6rem;
	border: 1px solid transparent;
	background-color: #d66572;
	color: #fff;
	cursor: pointer;
`;

const TaskInput = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

	return (
		<AddForm>
			<InputWrapper>
				<AddInput
					type='text'
					placeholder='Добавить задачу'
				/>
				<InputIcons>
					<Flame strokeWidth={1} />
					<Gem strokeWidth={1} />
				</InputIcons>
			</InputWrapper>
			<AddButton>Добавить</AddButton>
			{/* <Popover
				isOpen={isPopoverOpen}
				positions={['bottom']} // preferred positions by priority
				content={<div>Hi! I'm popover content.</div>}>
				<div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Click me!</div>
			</Popover> */}
		</AddForm>
	);
};
export default TaskInput;
