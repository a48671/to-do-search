import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, BlockForButtons, BlockForInput } from './styled';
import InputTask from './InputTask';

class Control extends PureComponent {
  render() {
    return (
      <Wrapper>
        <BlockForInput>
          <InputTask />
        </BlockForInput>
        <BlockForButtons>Buttons</BlockForButtons>
      </Wrapper>
    );
  }
}

Control.propTypes = {};

export default Control;
