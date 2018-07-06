import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

export default class ImageViewer extends Component {

	constructor() {
    super();
    this.state = {

    }
  }

  static navigationOptions = {
    title: 'Image Viewer',
    headerStyle: {
      backgroundColor: '#5DADE2'
    },  
    headerTitleStyle: {
      color: '#000',
      fontSize: 15,
      fontWeight: 'normal'
    }
  };

	render() {
		var {params} = this.props.navigation.state;
		var body = params.body;
    const url = "data:image/jpg;base64," + body;
    return (
      <View style={styles.container}>
        <Image
          style={{flex: 1, width: undefined, height: undefined}}
          resizeMode= "contain"
          source={{uri: url}}
        />
      </View>
    );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center',
       //alignItems: 'center',
      //  marginTop: 25,
      backgroundColor: "#fff"
    },
});
 