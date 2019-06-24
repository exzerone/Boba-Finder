import React from 'react';
import { StyleSheet } from 'react-native';
import { Location, Permissions } from 'expo';
import Map from './Map';
import Boba from './Boba';
import Page from './Page';
import Favorite from './Favorite';

const deltas = {
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};

export default class App extends React.Component {
	state = {
		region: null,
		bobaShops: [],
		bobaDetail: {},
		map: true,
		favorite: false,
		detail: false,
		favoriteList: []
	};

	componentWillMount() {
		this.getLocationAsync();
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

	getDetail = (id) => {
		let bobaDetail = this.state.bobaDetail;
		Boba.getBobadetail(id, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				console.log(result.data.location);
				bobaDetail.image = result.data.image_url;
				bobaDetail.location = result.data.location.display_address;
				bobaDetail.name = result.data.name;
				bobaDetail.photos = result.data.photos;
				bobaDetail.price = result.data.price;
				bobaDetail.review = result.data.review_count;
				bobaDetail.rating = result.data.rating;
				if (result.data.phone.length === 0) {
					bobaDetail.phone = 'Phone Number Unavailable';
				} else {
					bobaDetail.phone =
						`+1(${result.data.phone.slice(2, 5)})` +
						result.data.phone.slice(5, result.data.phone.length);
				}
				this.setState({ bobaDetail, detail: true, map: false });
			}
		});
	};

	async getFavorite() {
		await this.setState({ favorite: true, map: false });
	}

	async returnMap() {
		await this.setState({ map: true, favorite: false, bobaDetail: false });
	}

	async regionChange(region) {
		await this.setState({ region });
		await this.getBobaShops();
	}

	render() {
		let component;
		if (this.state.map === true) {
			component = (
				<Map
					function={this.regionChange.bind(this)}
					region={this.state.region}
					places={this.state.bobaShops}
					getDetail={this.getDetail.bind(this)}
					favorite={this.getFavorite.bind(this)}
				/>
			);
		} else if (this.state.favorite === true) {
			component = (
				<Favorite
					returnMap={this.returnMap.bind(this)}
					favoriteList={this.state.favoriteList}
				/>
			);
		} else {
			component = (
				<Page
					returnMap={this.returnMap.bind(this)}
					bobaDetail={this.state.bobaDetail}
				/>
			);
		}
		return component;
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
