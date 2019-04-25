import React, {Component} from 'react';
import {Wrapper, Container} from './styled';
import Head from "./components/Head";
import TasksList from "./components/TasksList";
import Control from "./components/Control";

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Container>
					<Head title="To do"/>
					<TasksList />
					<Control />
				</Container>
			</Wrapper>
		);
	}
}

export default App;