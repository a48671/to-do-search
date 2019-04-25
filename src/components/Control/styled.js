import styled from 'styled-components';
import { colors } from '../../variables/colors';

export const Wrapper = styled.div.attrs({ className: 'control' })`
  display: flex;
  padding: 8px 20px 10px;
  font-size: 18px;
  color: ${colors.wight};
  background-color: ${colors.dark};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const BlockForInput = styled.div.attrs({ className: 'control__input' })`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const ButtonsList = styled.div.attrs({
  className: 'control__buttons-list',
})`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-left: 15px;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const ButtonsItem = styled.div.attrs({
  className: 'control__buttons-item',
})`
  width: calc(50% - 7px);
  @media (max-width: 500px) {
    width: calc(50% - 4px);
  }
`;
