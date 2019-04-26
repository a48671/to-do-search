import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Checkbox, Title, Close } from './styled';

class TaskItem extends PureComponent {
  render() {
    const { title, done } = this.props;

    return (
      <Wrapper>
        <Checkbox done={done} />
        <Title>{title}</Title>
        <Close />
      </Wrapper>
    );
  }
}

TaskItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  done: PropTypes.bool,
};

export default TaskItem;
