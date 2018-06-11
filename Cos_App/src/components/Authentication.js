import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Authentication extends Component<Props> {
  constructor() {
    super();
    this.state = {
      text: "",
      url: "http://sdutta-cadence.cs21.force.com/public/CosLiteApp?token="  
    }
  }

  validateToken(t) {
    if(this.state.text == "") {
      alert("Input field can't be empty");
    }else {
      const url = this.state.url + this.state.text;
      return fetch(url)                              // token 1cv5ers34f
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson.message);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text>Enter your Authentication Code:</Text>
          <TextInput
            style={{height: 40, width: 100, borderColor: 'gray',}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            editable={true}
            maxLength={10}
          />
        </View>
        <View style={styles.btnContainer}>  
          <TouchableOpacity
            style={styles.button}
            onPress= {() => {this.validateToken(this.state.text)}}
          >
            <Text>Submit</Text>
          </TouchableOpacity>      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btnContainer: {
    flex: 1,
    padding: 50
  }
});
