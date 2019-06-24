import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class Favorite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ backgroundColor: 'lightskyblue', height: '100%' }}>
				<Text
					style={{ fontSize: 40, position: 'relative', top: 100, left: 90 }}
				>
					My Favorite List
				</Text>
				<Button style={{}} />
			</View>
		);
	}
}
