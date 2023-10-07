import styled from 'styled-components';
import { device } from '../styles/breakpoint';

const AddForm = styled.form`
	margin: 2rem 0;
	display: flex;
	gap: 1rem;
	flex-direction: column;

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

const AddInput = styled.input`
	padding: 1.2rem 2.4rem;
	transition: width 0.3s ease;
	border: 1px solid #000;
	border-radius: 0.6rem;
	flex-grow: 1;

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
	return (
		<AddForm>
			<AddInput
				type='text'
				placeholder='Добавить задачу'
			/>
			<AddButton>Добавить</AddButton>
		</AddForm>
	);
};
export default TaskInput;
