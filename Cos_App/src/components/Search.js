import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View
} from 'react-native';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
       
    }
  }
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
      <View style={styles.searchContainer}>
        <TextInput
          style={{height: 40, width: 200, borderWidth: 2, borderColor: 'gray',}}
          placeholder='search here...'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          editable={true}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Search </Text>
       </TouchableOpacity>
      </View>
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
  },
 searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
 
});
