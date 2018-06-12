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
      url: "http://sdutta-cadence.cs21.force.com/public/CosLiteApp?searchkey=",
      data: []
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

  search() {
    const { navigate } = this.props.navigation;
    if(this.state.text == "") {
      alert("Input field can't be empty");
    }else {
      const url = this.state.url + this.state.text;
     // alert(url);
      return fetch(url)                              // token 1cv5ers34f
      .then((response) => response.json())
      .then((responseJson) => {
          if(responseJson[0].message == "search result notFound") {
            alert("Sorry, No result Found.")
          }else {
            this.setState({data: responseJson});
            navigate("SearchListPage", { data: this.state.data});    
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
        <View style={styles.searchContainer}>
          <TextInput
            style={{height: 40, width: 200, borderWidth: 2, borderColor: 'gray',}}
            placeholder='search here...'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            editable={true}
            underlineColorAndroid='transparent'
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5DADE2',
    padding: 10
  },
  btnContainer: {
    flex:2,
  }
});
