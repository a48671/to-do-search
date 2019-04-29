import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, Checkbox, Title, Close } from './styled';
import { checkTask, deleteTask } from '../../../redux/ac/tasks';

class TaskItem extends PureComponent {
  render() {
    const { title, done, index, checkTask, deleteTask, indexMain } = this.props;

    return (
      <Wrapper>
        <Checkbox done={done} onClick={() => checkTask(index, indexMain)} />
        <Title>{title}</Title>
        <Close onClick={() => deleteTask(index, indexMain)} />
      </Wrapper>
    );
  }
}

TaskItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  done: PropTypes.bool,
  index: PropTypes.number,
  indexMain: PropTypes.number,
  checkTask: PropTypes.func,
};

TaskItem.defaultProps = {
  title: '',
  id: 'id',
  done: false,
  index: 0,
  indexMain: 0,
  checkTask: () => null,
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    checkTask: (index, indexMain) => dispatch(checkTask(index, indexMain)),
    deleteTask: (index, indexMain) => dispatch(deleteTask(index, indexMain)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TaskItem);
