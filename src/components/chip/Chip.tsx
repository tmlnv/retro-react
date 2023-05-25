/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Chip.styled';

export type ChipColor = 'primary' | 'secondary' | 'success' | 'error' | 'warn';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The color of the Chip.
	 *
	 * @default 'primary'
	 */
	color?: ChipColor;
	sx?: ThemeUICSSObject;
}

/**
 * Chips are used to represent small blocks of information.
 *
 * @example
 * <Chip color="success">
 * 	AB
 * </Chip>
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
	({ id, className, color = 'primary', children, sx, ...rest }, ref) => {
		const isClickable = !!rest.onClick || !!rest.onKeyDown;

		return (
			<Sc.Chip
				id={id}
				sx={sx}
				ref={ref}
				$color={color}
				$clickable={isClickable}
				className={classNames('chip-root', className, commonClassNames)}
				{...rest}
			>
				{children}
			</Sc.Chip>
		);
	},
);

Chip.displayName = 'Chip';
