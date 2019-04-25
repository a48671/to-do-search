import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';

class Head extends PureComponent {
	render() {
		const {title} = this.props;
		return (
			<Wrapper>
				{title}
			</Wrapper>
		);
	}
}

Head.propTypes = {
	title: PropTypes.string
};

Head.defaultProps = {
	title: 'To do'
}

export default Head;