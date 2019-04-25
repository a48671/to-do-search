import styled from "styled-components";
import {colors} from "./variables/colors";

export const Wrapper = styled.div.attrs({className: 'wrapper'})`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.grayLight};
	min-height: 100vh;
`;

export const Container = styled.div.attrs({className: 'wrapper__container'})`
	width: calc(100% - 20px);
	max-width: 500px;
	background-color: ${colors.wight};
	border-radius: 6px;
	overflow: hidden;
`;
