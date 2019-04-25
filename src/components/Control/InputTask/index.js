import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input } from './styled';

class InputTask extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Input placeholder="Input task" />
      </Wrapper>
    );
  }
}

InputTask.propTypes = {};

export default InputTask;
