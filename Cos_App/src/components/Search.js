import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SearchBar extends Component {
  static navigationOptions = {
    title: 'Search',
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
    return (
      <View style={styles.container}>
        <Text>This is text input</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
