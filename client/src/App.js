import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Location, Permissions } from 'expo';
import Map from './components/Map';
import Boba from './components/Boba';


const deltas = {
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};

export default class App extends React.Component {
	state = {
		region: null,
		bobaShops: []
	};

	componentWillMount() {
		this.getLocationAsync();
		// setInterval(this.getBobaShops.bind(this), 3000);
	}

	getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		const region = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			...deltas
		};
		await this.setState({ region });
		await this.getBobaShops();
	};

	getBobaShops = async () => {
		const { latitude, longitude } = this.state.region;
		const userLocation = { latitude, longitude };
		const bobaShops = await Boba.getBobaShops(userLocation);
		this.setState({ bobaShops });
	};

	async regionChange(region) {
		await this.setState({ region });
		await this.getBobaShops();
	}

	render() {
		const { region, bobaShops } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<Map
					function={this.regionChange.bind(this)}
					region={region}
					places={bobaShops}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
