import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTask, filterTask } from '../../redux/ac/tasks';

import { Wrapper, ButtonsList, BlockForInput, ButtonsItem } from './styled';
import InputTask from './InputTask';
import Button from '../Batton';

class Control extends PureComponent {
  state = {
    value: ''
  };

  render() {
    const { value } = this.state;

    const { onChangeHandler, addTaskHandler, filterTaskHandler } = this;

    return (
      <Wrapper>
        <BlockForInput onSubmit={addTaskHandler}>
          <InputTask
            value={value}
            onChangeHandler={onChangeHandler}
            placeholder="Input task"
          />
        </BlockForInput>
        <ButtonsList>
          <ButtonsItem>
            <Button title="Add task" onClickHandler={addTaskHandler} />
          </ButtonsItem>
          <ButtonsItem>
            <Button title="Search" onClickHandler={filterTaskHandler} />
          </ButtonsItem>
        </ButtonsList>
      </Wrapper>
    );
  }

  onChangeHandler = value => this.setState({ value });

  addTaskHandler = event => {
    event.preventDefault();

    const value = this.state.value;

    if (!value) return;

    this.props.addTask(value);
    this.setState({ value: '' });
  };

  filterTaskHandler = () => {
    const { tasks, filterTask } = this.props;
    const value = String(this.state.value);

    if (!value) return;

    const fiteredTasks = tasks.reduce((acc, task, index) => {
      const indexConcurrence = ~task.title.indexOf(value);

      const foundTask = task;
      foundTask.indexMain = index;

      if (indexConcurrence) {
        return [...acc, foundTask];
      }
      return acc;
    }, []);

    if (fiteredTasks.length) filterTask(fiteredTasks);
  };
}

Control.propTypes = {
  tasks: PropTypes.array,
  addTask: PropTypes.func,
  filterTask: PropTypes.func
};

Control.defaultProps = {
  tasks: [],
  addTask: () => null,
  filterTask: () => null
};

const mapStateToProps = state => {
  return {
    tasks: state.get('tasks').toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: value => dispatch(addTask(value)),
    filterTask: filteredTasks => dispatch(filterTask(filteredTasks))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
