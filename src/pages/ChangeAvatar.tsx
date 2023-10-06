import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ChangeAvatar: React.FC = () => {
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		const numberOfImages = 8;
		const imagesArray = Array.from({ length: numberOfImages }, (_, index) => `avatar-${index + 1}.png`);
		setImages(imagesArray);
	}, []);

	const ContainerGrid = styled.div`
		display: grid;
		max-width: 100%;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	`;

	const ImageCover = styled.div`
		width: 100%;
		overflow: hidden;
		border-radius: 50%;
		cursor: pointer;
	`;

	return (
		<div>
			<h2 style={{ marginBottom: '5rem', fontSize: '3.2rem' }}>Выбери новый аватар</h2>
			<ContainerGrid>
				{images.map((imageName, index) => {
					return (
						<ImageCover key={index}>
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
