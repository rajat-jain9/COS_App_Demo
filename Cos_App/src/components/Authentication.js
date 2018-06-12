import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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

  static navigationOptions = {
    title: 'Authentication',
    headerStyle: {
      backgroundColor: '#5DADE2'
    },
    headerTitleStyle: {
      color: '#000',
      fontSize: 15,
      fontWeight: 'normal'
    }
  };

  validateToken() {
    const { navigate } = this.props.navigation;
    if(this.state.text == "") {
      alert("Input field can't be empty");
    }else {
      const url = this.state.url + this.state.text;
      return fetch(url)                              // token 1cv5ers34f
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.message == "Token Matched") {
          alert("Authentication Successful");
          navigate("SearchPage");  
        }else {
          alert("Access Denied");
          this.setState({ text: "" });
        }
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
            onPress= {() => {this.validateToken()}}
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
    backgroundColor: '#5DADE2',
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
