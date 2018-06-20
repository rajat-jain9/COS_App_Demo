import React, { Component } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet, Image } from 'react-native';
const { width } = Dimensions.get('window');
export default class OfflineNotice extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
          style={{height: 50, width: 50}}
          source={require('../assets/no_internet_icon.png')}
        />
          <View style={styles.txtContainer}>
            <Text> Please Check your</Text>
            <Text>Internet Connection</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  offlineContainer: {
    flex: 1,
    backgroundColor: '#b52424',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  offlineText: { 
    color: '#fff'
  },
  imgContainer: {
    flex:14, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  txtContainer: {
    marginTop: 10
  }
});