import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, Container } from './styled';
import Head from './components/Head';
import TasksList from './components/TasksList';
import Control from './components/Control';

class App extends Component {
  componentDidUpdate(prevProps) {
    const { tasks } = this.props;
    if (tasks !== prevProps.tasks)
      window.localStorage.setItem('to_do_tasks', JSON.stringify(tasks));
  }

  render() {
    const { tasks, filteredTasks, filter } = this.props;

    return (
      <Wrapper>
        <Container>
          <Head title="To do" />
          <TasksList tasks={filter ? filteredTasks : tasks} filter={filter} />
          <Control />
        </Container>
      </Wrapper>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array,
  filter: PropTypes.bool,
  filteredTasks: PropTypes.array,
};

App.defaultProps = {
  tasks: [],
  filter: false,
  filteredTasks: [],
};

const mapStateToProps = state => {
  return {
    tasks: state.toJS().tasks,
    filter: state.toJS().filter,
    filteredTasks: state.toJS().filteredTasks,
  };
};

export default connect(mapStateToProps)(App);
