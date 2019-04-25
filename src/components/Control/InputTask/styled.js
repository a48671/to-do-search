import styled from 'styled-components';
import { colors } from '../../../variables/colors';

export const Wrapper = styled.div.attrs({ className: 'input-task' })``;

export const Input = styled.input.attrs({ className: 'input-task__input' })`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  font-size: 16px;
  color: ${colors.dark};
  border: 1px solid transparent;
  background-color: ${colors.wight};
  padding: 0 15px;
`;
