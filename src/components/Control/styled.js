import styled from 'styled-components';
import { colors } from '../../variables/colors';

export const Wrapper = styled.div.attrs({ className: 'control' })`
  display: flex;
  padding: 10px 20px;
  font-size: 18px;
  color: ${colors.wight};
  background-color: ${colors.dark};
`;

export const BlockForInput = styled.div.attrs({ className: 'control__input' })`
  width: 50%;
`;

export const BlockForButtons = styled.div.attrs({
  className: 'control__input',
})`
  width: 50%;
  padding-left: 15px;
`;
