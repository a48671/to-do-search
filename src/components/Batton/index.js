import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

class Button extends PureComponent {
  render() {
    const { title, onClickHandler } = this.props;

    return <Wrapper onClick={onClickHandler}>{title}</Wrapper>;
  }
}

Button.propTypes = {
  title: PropTypes.string,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = {
  title: 'Title',
  onClickHandler: () => null,
};

export default Button;
