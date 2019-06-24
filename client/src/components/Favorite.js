import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class Favorite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View
				style={{
					alignSelf: 'stretch',
					height: '100%',
					flex: 1,
					alignItems: 'center',
					backgroundColor: 'lightskyblue',
					height: '100%'
				}}
			>
				<Text style={{ fontSize: 40, position: 'relative', top: 100 }}>
					My Favorite List
				</Text>
				<Button
					style={{
						width: 200,
						height: 125,
						position: 'relative',
						top: 700,
						bottom: 0,
						opacity: 0.4
					}}
					title="Go Back To Map"
					onPress={this.props.returnMap}
				/>
			</View>
		);
	}
}
