import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Message } from './styled';
import TaskItem from './TaskItem';

class TasksList extends PureComponent {
  render() {
    const { tasks } = this.props;

    return <Wrapper>{this.renderTasks(tasks)}</Wrapper>;
  }

  renderTasks = tasks => {
    const keysTasks = Object.keys(tasks);

    if (!keysTasks.length) return <Message>No tasks</Message>;

    return keysTasks.map(keyTask => {
      const currentTask = tasks[keyTask];

      return (
        <TaskItem
          key={keyTask}
          title={currentTask.title}
          done={currentTask.done}
        />
      );
    });
  };
}

TasksList.propTypes = {
  tasks: PropTypes.object,
};

TasksList.defaultProps = {
  tasks: {},
};

export default TasksList;
