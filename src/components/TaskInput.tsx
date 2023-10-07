import styled from 'styled-components';
import { Popover } from 'react-tiny-popover';

import { device } from '../styles/breakpoint';
import { useState } from 'react';
import { Flame, Gem } from 'lucide-react';
import { variables } from '../styles/theme';
import MyPopover from './MyPopover';

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
	right: 1.5rem;
	top: calc(50% - 12px);
	display: flex;
	gap: 1rem;

	svg {
		cursor: pointer;
	}
`;

const AddInput = styled.input`
	padding: 1.2rem 2.4rem;
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

const AddButton = styled.button`
	padding: 1.2rem 2.4rem;
	border-radius: 0.6rem;
	border: 1px solid transparent;
	background-color: ${variables.colorBgRed};
	color: #fff;
	cursor: pointer;
`;

const TaskInput = () => {
	const [isDifficultOpen, setIsDifficultOpen] = useState<boolean>(false);
	const [isAwardOpen, setIsAwardOpen] = useState<boolean>(false);

	const PopoverHandle = (popover: 'difficult' | 'award'): void => {
		if (popover === 'difficult') {
			setIsAwardOpen(false);
			setIsDifficultOpen(true);
		} else {
			setIsAwardOpen(true);
			setIsDifficultOpen(false);
		}
	};

	return (
		<AddForm>
			<InputWrapper>
				<AddInput
					type='text'
					placeholder='Добавить задачу'
				/>
				<InputIcons>
					<Popover
						isOpen={isDifficultOpen}
						positions={['bottom']}
						padding={20}
						content={
							<MyPopover>
								<p>How Are You?</p>
							</MyPopover>
						}>
						<Flame
							onClick={() => PopoverHandle('difficult')}
							strokeWidth={1}
							color={isDifficultOpen ? variables.colorBgRed : '#000'}
						/>
					</Popover>
					<Popover
						isOpen={isAwardOpen}
						positions={['bottom']}
						padding={20}
						content={
							<MyPopover>
								<p>How Are You?</p>
							</MyPopover>
						}>
						<Gem
							onClick={() => PopoverHandle('award')}
							strokeWidth={1}
							color={isAwardOpen ? variables.colorBgRed : '#000'}
						/>
					</Popover>
				</InputIcons>
			</InputWrapper>
			<AddButton>Добавить</AddButton>
		</AddForm>
	);
};
export default TaskInput;
