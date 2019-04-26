import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input } from './styled';

class InputTask extends PureComponent {
  render() {
    const { value, placeholder, onChangeHandler } = this.props;

    return (
      <Wrapper>
        <Input
          value={value}
          placeholder={placeholder}
          onChange={event => onChangeHandler(event.target.value)}
        />
      </Wrapper>
    );
  }
}

InputTask.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

InputTask.defaultProps = {
  value: '',
  placeholder: '',
  onChangeHandler: () => null,
};

export default InputTask;
