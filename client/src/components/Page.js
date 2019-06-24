import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

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
					<Image
						style={{
							position: 'absolute',
							left: 0,
							top: 50,
							width: '100%',
							height: 280
						}}
						source={{
							uri: `${this.props.bobaDetail.image}`
						}}
					/>
					<Text
						style={{
							fontSize: 23,
							fontWeight: 'bold',
							position: 'relative',
							left: 10,
							top: 370
							// top: 10
						}}
					>
						{this.props.bobaDetail.name}
					</Text>
					<Text
						style={{ fontSize: 18, position: 'relative', left: 10, top: 370 }}
					>
						Price: {this.props.bobaDetail.price}
					</Text>
					<Text
						style={{ fontSize: 18, position: 'relative', left: 10, top: 380 }}
					>
						{`+1(${this.props.bobaDetail.phone.slice(2, 5)})` +
							this.props.bobaDetail.phone.slice(
								5,
								this.props.bobaDetail.phone.length
							)}
					</Text>
					<Text
						style={{ fontSize: 18, position: 'relative', left: 10, top: 390 }}
					>
						{this.props.bobaDetail.location.address1}
						{'\n'}
						{this.props.bobaDetail.location.city}
						{', '}
						{this.props.bobaDetail.location.state}{' '}
						{this.props.bobaDetail.location.zip_code}
					</Text>
				</View>
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
