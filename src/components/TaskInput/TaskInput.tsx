import { useState, useEffect, useRef } from 'react';
import { Popover } from 'react-tiny-popover';

import { Sword, Swords, Skull, Coins } from 'lucide-react';
import { variables } from '../../styles/theme';
import MyPopover from './MyPopover.tsx';
import { Todo } from '../../types';
import CoinsCounter from '../CoinsCounter';

import { AddButton, AddForm, AddInput, CoinsCount, InputIcons, InputWrapper } from './styledComponents.tsx';
import DifficultIcon from './DifficultIcon.tsx';

const TaskInput: React.FC = () => {
	const [isDifficultOpen, setIsDifficultOpen] = useState<boolean>(false);
	const [isCoinsOpen, setIsCoinsOpen] = useState<boolean>(false);
	const [currentTask, setCurrentTask] = useState<Todo>({
		difficult: 'ease',
		coins: 0,
		text: '',
	});

	// Закрытие Popover при клике снаружи
	const outsideClickRef = useRef<HTMLDivElement | null>(null); // Для отслеживания кликов вне компонента MyPopover

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (outsideClickRef.current && !outsideClickRef.current.contains(event.target as Node)) {
				// Клик сделан вне компонента MyPopover
				setIsCoinsOpen(false);
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

	const PopoverHandler = (popover: 'difficult' | 'coins'): void => {
		if (popover === 'difficult') {
			setIsCoinsOpen(false);
			setIsDifficultOpen(true);
		} else {
			setIsCoinsOpen(true);
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
									<p style={{ marginBottom: '1rem' }}>Уровень сложности:</p>
									<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
										<Sword onClick={() => chooseDifficultHandler('ease')} />
										<Swords onClick={() => chooseDifficultHandler('medium')} />
										<Skull onClick={() => chooseDifficultHandler('hard')} />
									</div>
								</MyPopover>
							</div>
						}>
						<div onClick={() => PopoverHandler('difficult')}>
							<DifficultIcon
								icon={currentTask.difficult}
								isDifficultOpen={isDifficultOpen}
							/>
						</div>
					</Popover>
					<Popover
						isOpen={isCoinsOpen}
						positions={['bottom']}
						padding={20}
						content={
							<div
								ref={node => {
									outsideClickRef.current = node; // Сохраняем ссылку на div для отслеживания кликов вне MyPopover
								}}>
								<MyPopover>
									<p>Награда:</p>
									<CoinsCounter
										currentTask={currentTask}
										setCurrentTask={setCurrentTask}
									/>
								</MyPopover>
							</div>
						}>
						<CoinsCount
							onClick={() => PopoverHandler('coins')}
							style={{ color: isCoinsOpen ? variables.colorBgRed : '#000' }}>
							{currentTask.coins}
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
