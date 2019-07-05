import React, { Component } from 'react';
import Axios from 'axios';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class Favorite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favoritelist: [],
			user: ''
		};
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData() {
		Axios.get('http://10.3.34.11:3005/data')
			.then((result) => {
				console.log(result.data);
				let favoritelist = this.state.favoritelist;
				for (let i = 0; i < result.data.length; i++) {
					favoritelist.push(result.data[i].name);
				}
				this.setState({ favoritelist, user: result.data[0].user });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	clearData() {
		Axios.delete('http://10.3.34.11:3005/data')
			.then((result) => {
				console.log(result);
				this.setState({ favoritelist: [] });
			})
			.catch((err) => {
				console.log(err);
			});
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
				<Text style={{ fontSize: 40, position: 'relative', top: 135 }}>
					Chris's Favorite List
				</Text>
				<Text style={{ fontSize: 30, position: 'absolute', top: 200 }}>
					{this.state.favoritelist.map((store) => {
						return store + '\n';
					})}
				</Text>
				<Button
					style={{
						width: 175,
						height: 125,
						position: 'absolute',
						top: 0,
						right:30,
						bottom: 40,
						opacity: 0.4
					}}
					title="Go Back To Map"
					onPress={this.props.returnMap}
				/>
				<Button
					style={{
						width: 200,
						height: 125,
						position: 'absolute',
						top: 500,
						alignSelf: 'center',
						bottom: 0,
						opacity: 0.4
					}}
					title="Clear List"
					onPress={this.clearData}
				/>
			</View>
		);
	}
}
