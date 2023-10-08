import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Popover } from 'react-tiny-popover';

import { device } from '../styles/breakpoint';
import { Sword, Swords, Skull, Coins } from 'lucide-react';
import { variables } from '../styles/theme';
import MyPopover from './MyPopover';
import { Todo } from '../types';
import AwardCounter from './AwardCounter';

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

const CoinsCount = styled.span`
	font-size: 2.2rem;
	font-weight: 400;
	cursor: pointer;
	display: flex;
	gap: 0.5rem;
`;

const TaskInput: React.FC = () => {
	const [isDifficultOpen, setIsDifficultOpen] = useState<boolean>(false);
	const [isAwardOpen, setIsAwardOpen] = useState<boolean>(false);
	const [currentTask, setCurrentTask] = useState<Todo>({
		difficult: 'ease',
		award: 0,
		text: '',
	});

	// Закрытие Popover при клике снаружи
	const outsideClickRef = useRef<HTMLDivElement | null>(null); // Для отслеживания кликов вне компонента MyPopover

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (outsideClickRef.current && !outsideClickRef.current.contains(event.target as Node)) {
				// Клик сделан вне компонента MyPopover
				setIsAwardOpen(false);
				setIsDifficultOpen(false);
			}
		}

		// Добавляем обработчик события для клика на всем экране
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Удаляем обработчик события при размонтировании компонента
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const PopoverHandler = (popover: 'difficult' | 'award'): void => {
		if (popover === 'difficult') {
			setIsAwardOpen(false);
			setIsDifficultOpen(true);
		} else {
			setIsAwardOpen(true);
			setIsDifficultOpen(false);
		}
	};

	const textHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const inputElement = e.target as HTMLInputElement;

		setCurrentTask(prev => ({
			...prev,
			text: inputElement.value,
		}));
	};

	const chooseDifficultHandler = (difficult: Todo['difficult']) => {
		setCurrentTask(prev => ({
			...prev,
			difficult: difficult,
		}));
	};

	return (
		<AddForm>
			<InputWrapper>
				<AddInput
					type='text'
					placeholder='Добавить задачу'
					value={currentTask.text}
					onChange={textHandler}
				/>
				<InputIcons>
					<Popover
						isOpen={isDifficultOpen}
						positions={['bottom']}
						padding={20}
						content={
							<div
								ref={node => {
									outsideClickRef.current = node; // Сохраняем ссылку на div для отслеживания кликов вне MyPopover
								}}>
								<MyPopover>
									<Sword onClick={() => chooseDifficultHandler('ease')} />
									<Swords onClick={() => chooseDifficultHandler('medium')} />
									<Skull onClick={() => chooseDifficultHandler('hard')} />
								</MyPopover>
							</div>
						}>
						{currentTask.difficult === 'ease' ? (
							<Sword
								onClick={() => PopoverHandler('difficult')}
								strokeWidth={1}
								color={isDifficultOpen ? variables.colorBgRed : '#000'}
							/>
						) : currentTask.difficult === 'medium' ? (
							<Swords
								onClick={() => PopoverHandler('difficult')}
								strokeWidth={1}
								color={isDifficultOpen ? variables.colorBgRed : '#000'}
							/>
						) : (
							<Skull
								onClick={() => PopoverHandler('difficult')}
								strokeWidth={1}
								color={isDifficultOpen ? variables.colorBgRed : '#000'}
							/>
						)}
					</Popover>
					<Popover
						isOpen={isAwardOpen}
						positions={['bottom']}
						padding={20}
						content={
							<div
								ref={node => {
									outsideClickRef.current = node; // Сохраняем ссылку на div для отслеживания кликов вне MyPopover
								}}>
								<MyPopover>
									<AwardCounter
										currentTask={currentTask}
										setCurrentTask={setCurrentTask}
									/>
								</MyPopover>
							</div>
						}>
						<CoinsCount
							onClick={() => PopoverHandler('award')}
							style={{ color: isAwardOpen ? variables.colorBgRed : '#000' }}>
							{currentTask.award}
							<Coins strokeWidth={1} />
						</CoinsCount>
					</Popover>
				</InputIcons>
			</InputWrapper>
			<AddButton>Добавить</AddButton>
		</AddForm>
	);
};
export default TaskInput;
