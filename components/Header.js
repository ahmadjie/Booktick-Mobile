import React, { Component } from 'react';
import { Header, Left, Right, Button, Title } from 'native-base';
export default class HeaderComponent extends Component {
	render() {
		return (
			<Header style={{ backgroundColor: '#ff5252', marginBottom: 10 }}>
				<Left>
					<Title>BookTick</Title>
				</Left>
				<Right>
					<Button transparent>
						<Title>Register</Title>
					</Button>
					<Button transparent>
						<Title>Login</Title>
					</Button>
				</Right>
			</Header>
		);
	}
}
