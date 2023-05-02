import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';
import '../fonts.css';
import { BoxPattern } from './Box';

export const Box = styled.div<{
	$color: string;
	$pattern: BoxPattern;
}>`
	background-color: ${(props) => props.$color};
	position: relative;
	color: #333333;
	padding: 1rem;
	border-radius: 0;
	text-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};
	font-family: Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: bold;

	outline: 1rem solid transparent;

	${(props) => {
		switch (props.$pattern) {
			case 'noise':
				return `
					background-image: url(https://grainy-gradients.vercel.app/noise.svg);
				`;
			case 'stripes':
				return `
					background-image: url(${require('../../assets/svg/diagonal_line_pattern.svg')});
				`;
			case 'dots':
			default:
				return `
					background-image: url(${require('../../assets/svg/checkboard_pattern.svg')});
				`;
		}
	}}

	&:before {
		background: linear-gradient(to top left, #3d3c42 50%, #d8d8d8 50%);
		box-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)}, -1px -1px 2px ${WHITE};
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		padding: 1rem;
		left: -1rem;
		top: -1rem;
		z-index: -1;
	}
`;
