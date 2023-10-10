// {
// 	currentTask.difficult === 'ease' ? (
// 		<Sword
// 			onClick={() => PopoverHandler('difficult')}
// 			strokeWidth={1}
// 			color={isDifficultOpen ? variables.colorBgRed : '#000'}
// 		/>
// 	) : currentTask.difficult === 'medium' ? (
// 		<Swords
// 			onClick={() => PopoverHandler('difficult')}
// 			strokeWidth={1}
// 			color={isDifficultOpen ? variables.colorBgRed : '#000'}
// 		/>
// 	) : (
// 		<Skull
// 			onClick={() => PopoverHandler('difficult')}
// 			strokeWidth={1}
// 			color={isDifficultOpen ? variables.colorBgRed : '#000'}
// 		/>
// 	);
// }

import { Sword, Swords, Skull } from 'lucide-react';

import { Todo } from '../../types';
import { variables } from '../../styles/theme';

interface IDifficultIconProps {
	icon: Todo['difficult'];
	isDifficultOpen?: boolean;
	completed?: boolean;
}

const DifficultIcon: React.FC<IDifficultIconProps> = ({ icon, isDifficultOpen, completed }) => {
	const COLORS = {
		black: '#000',
		red: variables.colorBgRed,
		gray: variables.colorBgGray,
	};

	const currentColor = `${completed || isDifficultOpen ? COLORS.red : COLORS.black}`;

	return (
		<>
			{icon === 'ease' && (
				<Sword
					strokeWidth={1}
					color={currentColor}
				/>
			)}
			{icon === 'medium' && (
				<Swords
					strokeWidth={1}
					color={currentColor}
				/>
			)}
			{icon === 'hard' && (
				<Skull
					strokeWidth={1}
					color={currentColor}
				/>
			)}
		</>
	);
};
export default DifficultIcon;
