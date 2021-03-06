import React from 'react';
import Axios from 'axios';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class Page extends React.Component {
	storeData = () => {
		Axios.post('http://10.3.34.11:3005/data', {
			user: 'Chris',
			name: this.props.bobaDetail.name,
			metadata: this.props.bobaDetail
		})
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<View
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: 'lightskyblue'
				}}
			>
				<View
					style={{
						position: 'absolute',
						alignSelf: 'center',
						backgroundColor: 'lightblue',
						width: '95%',
						height: '100%'
					}}
				>
					<Button
						style={{
							width: 190,
							height: 125,
							top: 50,
							position: 'relative',
							opacity: 0.4
						}}
						title="Go Back To Map"
						onPress={this.props.returnMap}
					/>
					<Image
						style={{
							position: 'relative',
							width: '100%',
							height: 300
						}}
						source={{
							uri: `${this.props.bobaDetail.image}`
						}}
					/>
					<Text
						style={{
							fontSize: 25,
							fontWeight: 'bold',
							position: 'relative',
							left: 5,
							top: 20
							// top: 10
						}}
					>
						{this.props.bobaDetail.name}
					</Text>
					<Text
						style={{ fontSize: 18, position: 'relative', left: 5, top: 20 }}
					>
						Price: {this.props.bobaDetail.price}
					</Text>
					<Text
						selectable={true}
						style={{ fontSize: 18, position: 'relative', left: 5, top: 20 }}
					>
						{this.props.bobaDetail.phone}
					</Text>
					<Text
						style={{ fontSize: 18, position: 'relative', left: 5, top: 30 }}
					>
						{this.props.bobaDetail.location.map((result) => {
							return result + '\n';
						})}
					</Text>
					<Button
						style={{
							width: 190,
							height: 125,
							position: 'relative',
							bottom: 0,
							top: 100,
							opacity: 0.4
						}}
						onPress={this.storeData}
						title="Add To Favorite"
					/>
				</View>
			</View>
		);
	}
}

export default Page;

