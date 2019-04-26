import styled from 'styled-components';
import { colors } from '../../variables/colors';

export const Wrapper = styled.div.attrs({ className: 'tasks-list' })`
  border: 2px solid ${colors.dark};
`;

export const Message = styled.div.attrs({ className: 'tasks-list__message' })`
  padding: 10px 20px 10px;
  font-size: 16px;
  color: ${colors.dark};
`;
