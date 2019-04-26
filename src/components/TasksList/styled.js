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

export const ShowAllTasks = styled.div.attrs({
  className: 'tasks-list__show-all-tasks',
})`
  padding: 10px 20px 10px;
  font-size: 16px;
  color: ${colors.wight};
  text-align: center;
  background-color: ${colors.gray};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.grayLight};
    color: ${colors.dark};
  }
`;
