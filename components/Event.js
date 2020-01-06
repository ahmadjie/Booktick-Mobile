import React, { Component } from 'react';
import { Content, H1, Card, CardItem, Text, Body } from 'native-base';
import { View, Button, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import axios from 'axios';

export default class EventComponent extends Component {
	handlePress = () => {
		this.props.navigation.navigate('EventDetail');
	};
	state = {
		events: []
	};
	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://192.168.1.33:7000/api/v1/events'
		}).then((responses) => {
			this.setState({ events: responses.data });
		});
	}

	render() {
		return (
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
										<Button title="Detail" onPress={this.handlePress} />
										{/* <Button transparent onPress={this.handlePress}>
											<Text style={{ color: '#ff5252' }}>Click Here</Text>
										</Button> */}
									</Body>
								</CardItem>
							</Card>
						);
					})}
				</Content>
			</Content>
		);
	}
}
