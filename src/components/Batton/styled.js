import styled from 'styled-components';
import { colors } from '../../variables/colors';

export const Wrapper = styled.div.attrs({ className: 'button' })`
  font-size: 14px;
  color: ${colors.dark};
  border: 1px solid transparent;
  background-color: ${colors.wight};
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 40px;
  line-height: 38px;
  &:hover {
    color: ${colors.wight};
    background-color: transparent;
    border: 1px solid ${colors.wight};
  }
  &:active {
    color: ${colors.gray};
    background-color: transparent;
    border: 1px solid ${colors.gray};
  }
`;
