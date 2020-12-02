/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import { keyframes } from 'styled-components';

export const changeColor = (initial, final) => keyframes`
	0% {
		color: ${final};
	}
	50% {
		color: ${initial};
	}
	100% {
		color: ${final};
	}
`;

export const changeOpacity = () => keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;
