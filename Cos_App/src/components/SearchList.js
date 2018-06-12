import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Body } from 'native-base';

export default class SearchList extends Component {
  static navigationOptions = {
    title: 'Search Results',
    headerStyle: {
      backgroundColor: '#5DADE2'
    },
    headerTitleStyle: {
      color: '#000',
      fontSize: 15,
      fontWeight: 'normal'
    }
  };


  onPress() {
    console.log("inside onPress");
    //alert("title: ");
  }

  render() {
    var {params} = this.props.navigation.state;
    //console.log("title:" +this.props.title);
    console.log("Description:" +params.data[0].Id);
    let list = params.data.map(function(listItem, index) {
      return(
        <Card>
          <TouchableOpacity  style={styles.button} onPress={this.onPress}>
            <CardItem style={styles.card}>
              <Body>
                <Text>
                  {listItem.Id} 
                </Text>
                <Text>
                  {listItem.Name}
                </Text>
                <Text>
                  {listItem.Description}
                </Text>
                <Text>
                  {listItem.ContentType}
                </Text>
                <Text>
                  {listItem.Type}
                </Text>
              </Body>
            </CardItem>
          </TouchableOpacity>
        </Card>
      );
    })
    return(
      <View style={styles.container}>
        <Content style={{margin: 10}}>
          {list}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 25,
      backgroundColor: "#fff"
  },
  card: {
    margin: 5
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5
  },
});
 