import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';
import TaskItem from "./TaskItem";

class TasksList extends PureComponent {
	render() {
		return (
			<Wrapper>
				<TaskItem
					title="Task"
				/>
				<TaskItem
					title="Task"
				/>
				<TaskItem
					title="Task"
				/>
			</Wrapper>
		);
	}
}

TasksList.propTypes = {
	tasks: PropTypes.object
};

TasksList.defaultProps = {
	tasks: []
}

export default TasksList;