import React, { ReactNode } from 'react';
import cn from 'classnames';
import s from './button.module.css';
console.log(s.button);

interface IButtonProps {
	children: ReactNode;
	color?: string;
}
const Button: React.FC<IButtonProps> = ({ color, children }) => {
	return (
		<button
			className={cn(s.button, {
				[s.primary]: color === 'primary',
				[s.secondary]: color === 'secondary',
			})}>
			{children}
		</button>
	);
};

export default Button;
