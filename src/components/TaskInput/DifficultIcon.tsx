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
	const iconStyle = { flexShrink: 0 };

	return (
		<>
			{icon === 'ease' && (
				<Sword
					strokeWidth={1}
					color={currentColor}
					style={iconStyle}
				/>
			)}
			{icon === 'medium' && (
				<Swords
					strokeWidth={1}
					color={currentColor}
					style={iconStyle}
				/>
			)}
			{icon === 'hard' && (
				<Skull
					strokeWidth={1}
					color={currentColor}
					style={iconStyle}
				/>
			)}
		</>
	);
};
export default DifficultIcon;
