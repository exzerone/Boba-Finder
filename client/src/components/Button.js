import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity style={styles}>
				<Text>Search This Area</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	position: 'absolute',
	backgroundColor: 'blue',
	value: 'Search This Area',
	height: 100,
	color: 'white'
};
