/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Card.styled';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background of the Card.
	 *
	 * @default 'darkseagreen'
	 */
	color?: string;
	/**
	 * The header of the Card.
	 *
	 * @default undefined
	 *
	 */
	header?: string | React.ReactNode;
	/**
	 * The image of the Card.
	 *
	 * @default undefined
	 */
	image?: string;
	/**
	 * The footer of the Card.
	 *
	 * @default undefined
	 */
	footer?: string | React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			id,
			className,
			children,
			header,
			image,
			footer,
			color = 'darkseagreen',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Card
				$color={color}
				ref={ref}
				id={id}
				className={classNames('box-root', className)}
				{...rest}
			>
				{typeof header === 'string' ? (
					<Sc.CardTitle>{header}</Sc.CardTitle>
				) : (
					header
				)}
				{image && (
					<Sc.CardImageWrapper>
						<Sc.CardImage src={image} />
					</Sc.CardImageWrapper>
				)}
				<Sc.CardContent>{children}</Sc.CardContent>
				{typeof footer === 'string' ? (
					<Sc.CardFooter>{footer}</Sc.CardFooter>
				) : (
					footer
				)}
			</Sc.Card>
		);
	},
);

Card.displayName = 'Card';