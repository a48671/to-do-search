import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, Container } from './styled';
import Head from './components/Head';
import TasksList from './components/TasksList';
import Control from './components/Control';

class App extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <Wrapper>
        <Container>
          <Head title="To do" />
          <TasksList tasks={tasks} />
          <Control />
        </Container>
      </Wrapper>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.object,
};

App.defaultProps = {
  tasks: {},
};

const mapStateToProps = state => {
  return {
    tasks: state,
  };
};

export default connect(mapStateToProps)(App);
