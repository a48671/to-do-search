import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, Checkbox, Title, Close } from './styled';
import { checkTask } from '../../../redux/ac/tasks';

class TaskItem extends PureComponent {
  render() {
    const { title, done, index, checkTask } = this.props;

    return (
      <Wrapper>
        <Checkbox done={done} onClick={() => checkTask(index)} />
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
  index: PropTypes.number,
  checkTask: PropTypes.func,
};

TaskItem.defaultProps = {
  title: '',
  id: 'id',
  done: false,
  index: 0,
  checkTask: () => null,
};

const mapDispatchToProps = dispatch => {
  return {
    checkTask: index => dispatch(checkTask(index)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TaskItem);
