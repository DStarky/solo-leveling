import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { changeAvatar } from '../store/userSlice';
import { device } from '../styles/breakpoint';

const ChangeAvatar: React.FC = () => {
	const [images, setImages] = useState<string[]>([]);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const numberOfImages = 8;
		const imagesArray = Array.from({ length: numberOfImages }, (_, index) => `avatar-${index + 1}.png`);
		setImages(imagesArray);
	}, []);

	const ContainerGrid = styled.div`
		display: grid;
		max-width: 100%;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;

		@media ${device.laptop} {
			grid-template-columns: repeat(3, 1fr);
		}

		@media ${device.desktop} {
			grid-template-columns: repeat(4, 1fr);
		}
	`;

	const Heading = styled.h2`
		margin-bottom: 5rem;
		font-size: 2rem;

		@media ${device.laptop} {
			font-size: 2.4rem;
		}

		@media ${device.desktop} {
			font-size: 3.2rem;
		}
	`;

	const ImageCover = styled.div`
		width: 100%;
		overflow: hidden;
		border-radius: 50%;
		cursor: pointer;
	`;

	return (
		<div>
			<Heading >Выберите новый аватар</Heading>
			<ContainerGrid>
				{images.map((imageName, index) => {
					return (
						<ImageCover
							key={index}
							onClick={() => dispatch(changeAvatar(imageName))}>
							<img
								src={`/images/${imageName}`}
								alt='user avatar'
								style={{ width: '100%' }}
							/>
						</ImageCover>
					);
				})}
			</ContainerGrid>
		</div>
	);
};
export default ChangeAvatar;
