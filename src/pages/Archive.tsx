import ArchiveTask from '../components/ArchiveTask';
import { useAppSelector } from '../hooks';
import { selectTodo } from '../store/todoSlice';

const Archive = () => {
	const { archive } = useAppSelector(selectTodo);
	return (
		<div style={{ width: '100%' }}>
			<h2 style={{ marginBottom: '2rem' }}>Архив заданий</h2>
			<ul style={{ listStyleType: 'none' }}>
				{archive.map(task => {
					return (
						<ArchiveTask
							key={task.id}
							{...task}
						/>
					);
				})}
			</ul>
		</div>
	);
};
export default Archive;
