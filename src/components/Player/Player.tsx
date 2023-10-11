import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Coins, Pencil, Sparkle } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser, changeName, difficultyPoints, updateCoinsAndExp } from '../../store/userSlice';
import ProgressBar from '../ProgressBar';
import { PlayerFrame, UsernameBlock, AvatarCover, PlayerInfo } from './StyledComponentForPlayer';
import { selectTodo } from '../../store/todoSlice';
import { ArchiveButton } from '../ToArchiveButton';

// START COMPONENT

const Player: React.FC = () => {
	const { name, level, avatarPath, coins } = useAppSelector(selectUser);
	const { completeTodos, archive } = useAppSelector(selectTodo);

	const [editName, setEditName] = useState<boolean>(false);
	const [usernameValue, setUsernameValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();

	const editHandler = () => {
		setEditName(true);
	};

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsernameValue(e.target.value);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEditName(false);
		if (usernameValue === '') {
			dispatch(changeName('Username'));
		} else {
			dispatch(changeName(usernameValue));
		}
	};

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();
	}, [editName]);

	useEffect(() => {
		let totalCoins: number = completeTodos.reduce((acc, todo) => acc + todo.coins, 0);
		let totalExp: number = completeTodos.reduce((acc, todo) => acc + difficultyPoints[todo.difficult], 0);

		  if (archive.length > 0) {
				for (const archivedTodo of archive) {
					if (archivedTodo.completed) {
						totalCoins += archivedTodo.coins;
						totalExp += difficultyPoints[archivedTodo.difficult];
					}
				}
			}

		dispatch(updateCoinsAndExp({ coins: totalCoins, exp: totalExp }));
	}, [completeTodos, archive]);

	return (
		<PlayerFrame>
			<UsernameBlock>
				{editName ? (
					<form
						onSubmit={submitHandler}
						onBlur={submitHandler}>
						<input
							type='text'
							placeholder='Введите никнейм'
							value={usernameValue}
							onChange={inputHandler}
							ref={inputRef}
							style={{
								padding: '0.5rem 1rem',
							}}
						/>
					</form>
				) : (
					<>
						<h3 style={{ fontSize: '2.4rem' }}>{name}</h3>
						<Pencil
							size={16}
							style={{ cursor: 'pointer' }}
							onClick={editHandler}>
							<title>Изменить имя пользователя</title>
						</Pencil>
					</>
				)}
			</UsernameBlock>
			<Link to='/avatar'>
				<AvatarCover>
					<img
						src={`/images/${avatarPath}`}
						alt='avatar of user'
					/>
				</AvatarCover>
			</Link>
			<ProgressBar />
			<PlayerInfo>
				<Sparkle strokeWidth={1} />
				<p>Level:</p>
				<p style={{ fontWeight: '700' }}>{level}</p>
				<Coins strokeWidth={1} />
				<p>Coins:</p>
				<p style={{ fontWeight: '700' }}>{coins}</p>
			</PlayerInfo>
				{archive.length > 0 && <Link to="/archive"><ArchiveButton>Архив</ArchiveButton></Link>}
		</PlayerFrame>
	);
};
export default Player;
