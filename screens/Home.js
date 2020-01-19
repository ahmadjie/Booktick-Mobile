import React, { Component } from 'react';
import { Content, H1, Card, CardItem, Text, Body, Container } from 'native-base';
import { Button, Image } from 'react-native';
import axios from 'axios';
export default class Home extends Component {
	static navigationOptions = {
		title: 'BookTick',
		headerStyle: {
			backgroundColor: '#ff5252'
		},
		headerTintColor: '#fff'
	};

	state = {
		events: []
	};
	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://192.168.1.107:7000/api/v1/events'
		}).then((responses) => {
			this.setState({ events: responses.data });
		});
	}

	render() {
		return (
			<Container style={{ backgroundColor: '#fbe9e7' }}>
				<Content style={{ marginTop: 20 }}>
					<H1 style={{ color: '#ff5252' }}>Events</H1>
					<Content>
						{this.state.events.map((event, index) => {
							return (
								<Card key={index}>
									<CardItem>
										<CardItem cardBody>
											<Card
												style={{
													position: 'absolute',
													top: 6,
													right: 6,
													backgroundColor: 'white',

													padding: 6
												}}
											>
												<Text style={{ color: '#ff5252' }}>{event.price}</Text>
											</Card>
											<Image
												source={{ uri: `${event.image}` }}
												style={{ height: 200, width: null, flex: 1 }}
											/>
										</CardItem>
									</CardItem>
									<CardItem>
										<Body>
											<H1>{event.title}</H1>
											<Text style={{ color: '#ff5252' }}>{event.starTime}</Text>
											<Text style={{ color: '#9e9e9e' }}>{event.description}</Text>
											<Button title="Detail" color="#ff5252" onPress={() => {
												this.props.navigation.navigate('EventDetail', {
													itemId: event.id
												})
											}} />
										</Body>
									</CardItem>
								</Card>
							);
						})}
					</Content>
				</Content>
			</Container>
		);
	}
}
