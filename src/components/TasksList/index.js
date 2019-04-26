import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Message, ShowAllTasks } from './styled';
import TaskItem from './TaskItem';

class TasksList extends PureComponent {
  render() {
    const { tasks } = this.props;

    return (
      <Wrapper>
        {this.renderTasks(tasks)}
        {this.showAllTasks()}
      </Wrapper>
    );
  }

  showAllTasks = () => {
    if (!this.props.filter) return null;
    return <ShowAllTasks onClick={() => null}>Show all tasks</ShowAllTasks>;
  };

  renderTasks = tasks => {
    if (!tasks.length) return <Message>No tasks</Message>;

    return tasks.map((task, index) => {
      return (
        <TaskItem
          index={index}
          key={task.id}
          title={task.title}
          done={task.done}
        />
      );
    });
  };
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  filter: PropTypes.bool,
};

TasksList.defaultProps = {
  tasks: [],
  filter: false,
};

export default TasksList;
