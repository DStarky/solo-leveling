import styled from 'styled-components';
import Avatar from '../assets/images/avatar.png';
import { Pencil } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectUser } from '../store/userSlice';
import { useState } from 'react';

import ProgressBar from './ProgressBar';
import { changeName } from '../store/userSlice';

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

const Player: React.FC = () => {
	const { name, level } = useAppSelector(selectUser);
	const [editName, setEditName] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const editHandler = () => {
		setEditName(true);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEditName(false);
		dispatch(changeName('123'))
	};

	return (
		<PlayerFrame>
			<UsernameBlock>
				{!editName ? (
					<>
						<h3>{name}</h3>
						<Pencil
							size={16}
							style={{ cursor: 'pointer' }}
							onClick={editHandler}
						/>
					</>
				) : (
					<form onSubmit={submitHandler}>
						<input
							type='text'
							placeholder='Input new username'
						/>
						<input
							type='submit'
							value='OK'
						/>
					</form>
				)}
			</UsernameBlock>
			<img
				src={Avatar}
				alt='avatar of user'
			/>
			<ProgressBar />
			<p>lvl {level}</p>
		</PlayerFrame>
	);
};
export default Player;
