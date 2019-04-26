import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTask } from '../../redux/ac/tasks';

import { Wrapper, ButtonsList, BlockForInput, ButtonsItem } from './styled';
import InputTask from './InputTask';
import Button from '../Batton';

class Control extends PureComponent {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;

    const { onChangeHandler, addTaskHandler } = this;

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
            <Button title="Search" />
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
}

Control.propTypes = {
  addTask: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: value => dispatch(addTask(value)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Control);
