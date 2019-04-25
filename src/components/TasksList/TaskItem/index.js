import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';

class TaskItem extends PureComponent {
	render() {

		const {title} = this.props;

		return (
			<Wrapper>
				{title}
			</Wrapper>
		);
	}
}

TaskItem.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	id: PropTypes.string,
	done: PropTypes.bool
};

export default TaskItem;