import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends Component {
	state = {
		mapRegion: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		},
		locationResult: null,
		location: { coords: { latitude: 37.78825, longitude: -122.4324 } }
	};

	componentDidMount() {
		this._getLocationAsync();
	}

	_handleMapRegionChange = (mapRegion) => {
		this.setState({ mapRegion });
	};

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permission to access location was denied',
				location
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({
			locationResult: JSON.stringify(location),
			location
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ alignSelf: 'stretch', height: '100%', flex: 1 }}
					initialRegion={{
						latitude: this.state.location.coords.latitude,
						longitude: this.state.location.coords.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
					onRegionChange={this._handleMapRegionChange}
				>
					<MapView.Marker
						coordinate={this.state.location.coords}
						title="Current Location"
					/>
				</MapView>
				{/* <Text>{this.state.location.coords.latitude}</Text> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1'
	}
});
