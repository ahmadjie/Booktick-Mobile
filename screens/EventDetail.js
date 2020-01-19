import React from 'react';
import { Content, H1, Card, CardItem, Text, Body, Container } from 'native-base';
import { Image, Button } from 'react-native';
import axios from 'axios'


export default class EventDetail extends React.Component {
	static navigationOptions = {
		title: 'Event Detail',
		headerStyle: {
			backgroundColor: '#ff5252'
		},
		headerTintColor: '#fff'
	};

	state = {
		events: []
	};
	componentDidMount() {
		const { navigation } = this.props
		const getIdEvent = navigation.getParam('itemId')
		axios({
			method: 'GET',
			url: `http://192.168.1.107:7000/api/v1/event/${getIdEvent}`
		}).then((responses) => {
			this.setState({ events: responses.data });
		});
	}


	render() {
		const { navigation } = this.props

		return (
			<Container style={{ backgroundColor: '#fbe9e7' }}>
				<Content style={{ marginTop: 20 }}>
					{console.log(this.state.events)}
					<H1 style={{ color: '#ff5252' }}>Detail</H1>
					<Content>
						<Card>
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
										<Text style={{ color: '#ff5252' }}>{this.state.events.price}</Text>
									</Card>
									<Image
										source={{
											uri: `${this.state.events.image}`
										}}
										style={{ height: 200, width: null, flex: 1 }}
									/>
								</CardItem>
							</CardItem>
							<CardItem>
								<Body>
									<H1>{this.state.events.title}</H1>
									<Text style={{ color: '#ff5252' }}>{this.state.events.starTime}</Text>
									<Text style={{ color: '#9e9e9e' }}>{this.state.events.description}</Text>
								</Body>
							</CardItem>
						</Card>
					</Content>
				</Content>
			</Container>
		);
	}
}
