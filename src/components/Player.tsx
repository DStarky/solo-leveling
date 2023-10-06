import styled from 'styled-components';
import { Pencil } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectUser } from '../store/userSlice';
import { useState } from 'react';

import AvatarImg from '/images/avatar-3.png';
import ProgressBar from './ProgressBar';
import { changeName } from '../store/userSlice';
import { Link } from 'react-router-dom';

const PlayerFrame = styled.section`
	flex-basis: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const UsernameBlock = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const AvatarCover = styled.div`
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

const Player: React.FC = () => {
	const { name, level } = useAppSelector(selectUser);
	const [editName, setEditName] = useState<boolean>(false);
	const [usernameValue, setUsernameValue] = useState<string>('');

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
		dispatch(changeName(usernameValue));
	};

	return (
		<PlayerFrame>
			<UsernameBlock>
				{editName ? (
					<form
						onSubmit={submitHandler}
						onBlur={submitHandler}>
						<input
							type='text'
							placeholder='Input new username'
							value={usernameValue}
							onChange={inputHandler}
						/>
						<input
							type='submit'
							value='OK'
						/>
					</form>
				) : (
					<>
						<h3>{name}</h3>
						<Pencil
							size={16}
							style={{ cursor: 'pointer' }}
							onClick={editHandler}
						/>
					</>
				)}
			</UsernameBlock>
			<Link to='/avatar'>
				<AvatarCover>
					<img
						src={AvatarImg}
						alt='avatar of user'
					/>
				</AvatarCover>
			</Link>
			<ProgressBar />
			<p>lvl {level}</p>
		</PlayerFrame>
	);
};
export default Player;
