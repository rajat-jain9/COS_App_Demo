import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { NetInfo } from 'react-native'

import OfflineNotice from './OfflineNotice';

export default class Authentication extends Component<Props> {
  constructor() {
    super();
    this.state = {
      text: "",
      url: "http://sdutta-cadence.cs21.force.com/public/CosLiteApp?token=",
      showMe: false,
      isConnected: true,
      isLoggedIn: "false"
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

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
 }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };
  isLoggedIn() {
    this.state.isLoggedIn = "true";
    let user = this.state.isLoggedIn;
    AsyncStorage.setItem('name', user);
    console.log("loign status:" +user)
  }
  validateToken() {
    console.log("login status..." +this.state.isLoggedIn);
    this.setState({showMe: true});
    const { navigate } = this.props.navigation;
    if(this.state.text == "") {
      alert("Input field can't be empty");
      this.setState({showMe: false});
    }else {
      const url = this.state.url + this.state.text;
      return fetch(url)                              // token 1cv5ers34f
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.message == "Token Matched") {
          alert("Authentication Successful");
          this.isLoggedIn();
          navigate("SearchPage");
        }else {
          alert("Access Denied");
        }
        this.setState({showMe: false, text: ""});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  render() {
    console.log("inside render auh");
    if (!this.state.isConnected){
      return(
        <OfflineNotice/>
      );
    }else
    return (
      <View style={styles.container}>
        {
          this.state.showMe ? 
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#5DADE2"/>
              <Text>Loading...</Text>
            </View>
          :
          <View style={{flex:3}}>
            <View style={styles.txtContainer}>
              <Text>Enter your Authentication Code:</Text>
              <TextInput
                style={{height: 40, width: 100, marginTop: 20}}
                secureTextEntry={true}
                autoFocus = {true}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                editable={true}
                maxLength={10}
                underlineColorAndroid='#000000'
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
        }
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
    padding: 10,
    borderRadius: 10,
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btnContainer: {
    flex: 1,
    padding: 80
  }
});
