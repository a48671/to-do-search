import styled from "styled-components";
import {colors} from "../../../variables/colors";

export const Wrapper = styled.div.attrs({className: 'tasks-list'})`
	padding: 10px 20px;
	border-bottom: 1px solid ${colors.gray};
`;