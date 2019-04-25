import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ButtonsList, BlockForInput, ButtonsItem } from './styled';
import InputTask from './InputTask';
import Button from '../Batton';

class Control extends PureComponent {
  render() {
    return (
      <Wrapper>
        <BlockForInput>
          <InputTask />
        </BlockForInput>
        <ButtonsList>
          <ButtonsItem>
            <Button title="Add task" />
          </ButtonsItem>
          <ButtonsItem>
            <Button title="Search" />
          </ButtonsItem>
        </ButtonsList>
      </Wrapper>
    );
  }
}

Control.propTypes = {};

export default Control;
