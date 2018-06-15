import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Body } from 'native-base';

export default class SearchList extends Component {
  constructor() {
    super();
    this.state= {
      type: ""
    }
  }

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

   test() {
    alert("Done...");
  }

  render() {
    const { navigate } = this.props.navigation;
    var {params} = this.props.navigation.state;
    let list = params.data.map(function(listItem, index) {
      var icon = require('../assets/unknown_file_icon.png');
      if(listItem.Type == 'pdf') {
        icon = require('../assets/pdf_file_icon.png');
      }
      if(listItem.Type == 'mp4' || listItem.Type == '3gp' || listItem.Type == 'flv' || listItem.Type == 'mkv') {
        icon = require('../assets/video_file_icon.png');
      }
      if(listItem.Type == 'txt' || listItem.Type == 'docx') {
        icon = require('../assets/text_file_icon.png');
      }
      if(listItem.Type == 'jpg') {
        icon = require('../assets/img_file_icon.png');
      }
      if(listItem.Type == 'html') {
        icon = require('../assets/html_file_icon.png');
      }
      if(listItem.Type == 'xlsx') {
        icon = require('../assets/excel_file_icon.png');
      }
      return(
        <Card>
          {/*<TouchableOpacity  style={styles.button} onPress={this.onPress}>*/}
            <CardItem style={styles.card}>
              <Body>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <View style={{flex:5}}>
                  <View>
                  <TouchableOpacity  style={styles.button} onPress= { () => { navigate('ContentPage', {id: listItem.Id, type: listItem.Type}) }}>
                    <Text style={{fontWeight: 'bold', color: '#5DADE2'}} numberOfLines={2}>
                      {listItem.Title} 
                    </Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:10, fontWeight: 'normal'}} numberOfLines={2}>
                      {listItem.Description}
                    </Text>
                  </View>
                  <View style={{flex:1, alignItems: 'center'}}>
                    <Image
                       style={{width: 30, height: 30}}
                      source={icon}
                    />
                  </View>
                </View>  
              </Body>
            </CardItem>
          {/*</TouchableOpacity>*/}
        </Card>
      );
    })
    return(
      <View style={styles.container}>
        <TouchableOpacity  style={styles.button} onPress= { () => { navigate("ContentPage")} }>
          <Text style={{fontWeight: 'bold', color: '#5DADE2'}} numberOfLines={2}>
            Click Me 
          </Text>
        </TouchableOpacity>
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
 