import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: "how",
      url: "http://sdutta-cadence.cs21.force.com/public/CosLiteApp?searchkey=",
      data: [],
      showMe: false
    }
  }
  static navigationOptions = {
    header: null
  };

  search() {
    this.setState({showMe: true});
    const { navigate } = this.props.navigation;
    if(this.state.text.trim().length == 0) {      //used to prevent just space in input field.
      alert("Input field can't be empty");
      this.setState({text: ""});
    }else {
      const url = this.state.url + this.state.text;
      return fetch(url)                              // token 1cv5ers34f
      .then((response) => response.json())
      .then((responseJson) => {
          if(responseJson[0].message == "search result notFound") {
            alert("Sorry, No result Found.");
          }else {
            this.setState({data: responseJson});
            navigate("SearchListPage", { data: this.state.data});    
          }
          this.setState({text: "", showMe: false});
      })
      .catch((error) => {
        console.error(error);
      });
    }
    this.setState({showMe: false});
  }


  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {
          this.state.showMe ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#5DADE2"/>
              <Text>Loading....</Text>
            </View>
          :
          <View style={{flex: 3}}>
            <View style={styles.homeContainer}>
              <View style={styles.txtHome}>
                <Text style={styles.txt}> Search </Text>
              </View>
              <View style={styles.txtBtn}>
                <TouchableOpacity
                  style={styles.btnHome}
                  onPress= {() => {navigate("AuthPage")}}
                >  
                  <Text> Logout </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                style={{height: 40, width: 200}}
                placeholder='search here...'
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                editable={true}
                autoFocus={false}
                underlineColorAndroid='#000000'  //transpaent(to remove underline)
              />
            </View>
            <View style={styles.btnContainer}>  
              <TouchableOpacity
                style={styles.button}
                onPress= {() => {this.search()}}
              >
                <Text> Search </Text>
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
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 searchContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5DADE2',
    padding: 10,
    borderRadius: 10,
  },
  btnContainer: {
    flex:10,
    margin: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  homeContainer: {
    flex:2,
    backgroundColor: '#5DADE2',
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end'
  },
  txtHome: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  txtBtn: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnHome: {
    backgroundColor: '#D6EAF8',
    height: 20,
    width: 60
  },
  txt: {
    fontSize: 16,
  }
});
