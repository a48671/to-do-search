import styled from 'styled-components';
import { colors } from '../../../variables/colors';

export const Wrapper = styled.div.attrs({ className: 'tasks-item' })`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid ${colors.gray};
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.grayLight};
  }
`;

export const Checkbox = styled.div.attrs({ className: 'tasks-item__checkbox' })`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.dark};
  cursor: pointer;
  transition: 0.3s;
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 12px;
    height: 5px;
    top: -4px;
    left: 1px;
    bottom: 0;
    right: 0;
    margin: auto;
    border-left: 3px solid ${colors.dark};
    border-bottom: 2px solid ${colors.dark};
    transform: rotate(-50deg);
    opacity: ${props => (props.done ? '1' : '0')};
  }
`;

export const Title = styled.div.attrs({ className: 'tasks-item__title' })`
  width: calc(100% - 20px - 15px);
  padding: 1px 15px 0 15px;
  font-size: 16px;
  color: ${colors.dark};
`;

export const Close = styled.div.attrs({ className: 'tasks-item__title' })`
  position: relative;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  cursor: pointer;
  margin-top: 2px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: ${colors.dark};
  }
  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: ${colors.dark};
  }
  &:hover {
    opacity: 0.8;
  }
`;
