import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

export default class ContentViewer extends Component {
	render() {
		var {params} = this.props.navigation.state;
		//alert(params.type);
		return(
			<View style={styles.Container}>
				<Text>id={params.id}</Text>
				<Text>type={params.type}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});