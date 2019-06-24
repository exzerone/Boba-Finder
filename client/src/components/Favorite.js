import React from 'react';
import {Text} from 'react-native';

export default class Favorite extends React.Componennt{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<Text>
				My Favorite List:
			</Text>
		)
	}
}