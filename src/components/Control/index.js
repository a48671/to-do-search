import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, BlockForButtons, BlockForInput } from './styled';

class Control extends PureComponent {
  render() {
    return (
      <Wrapper>
        <BlockForInput>Input</BlockForInput>
        <BlockForButtons>Buttons</BlockForButtons>
      </Wrapper>
    );
  }
}

Control.propTypes = {};

export default Control;
