import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<View
					style={{
						width: 150,
						height: 150,
						top: 10,
						backgroundColor: 'powderblue'
					}}
				/>
			</View>
		);
	}
}

export default Page;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center'
// 	},
// 	text: {
// 		...palette.text,
// 		...{
// 			marginHorizontal: 8,
// 			marginVertical: 10
// 		}
// 	}
// });
