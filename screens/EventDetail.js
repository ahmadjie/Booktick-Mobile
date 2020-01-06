import React from 'react';
import { Content, H1, Card, CardItem, Text, Body, Container } from 'native-base';
import { Image, Button } from 'react-native';
export default class EventDetail extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#ff5252'
		},
		headerTintColor: '#fff'
	};

	render() {
		return (
			<Container style={{ backgroundColor: '#fbe9e7' }}>
				<Content style={{ marginTop: 20 }}>
					<H1 style={{ color: '#ff5252' }}>Events</H1>
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
										<Text style={{ color: '#ff5252' }}>120000</Text>
									</Card>
									<Image
										source={{
											uri: `https://cdn1-production-images-kly.akamaized.net/HVzlC2h8IkU9KlXfBqQL42n2OrE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1858174/original/068844300_1517557076-Langsing-Tanpa-Diet-ala-Raisa-Andriana-Foto-Deki-Prayoga-Digital-Imaging-Muhammad-Iqbal-Nurfajri-Bintang-com.jpg`
										}}
										style={{ height: 200, width: null, flex: 1 }}
									/>
								</CardItem>
							</CardItem>
							<CardItem>
								<Body>
									<H1>ini raisa</H1>
									<Text style={{ color: '#ff5252' }}>12 des </Text>
									<Text style={{ color: '#9e9e9e' }}>deskripsi</Text>

									{/* <Button transparent onPress={this.handlePress}>
											<Text style={{ color: '#ff5252' }}>Click Here</Text>
										</Button> */}
								</Body>
							</CardItem>
						</Card>
					</Content>
				</Content>
			</Container>
		);
	}
}
