import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Body } from 'native-base';
import OpenFile from 'react-native-doc-viewer';


export default class SearchList extends Component {
  constructor() {
    super();
    this.state= {
      type: "",
      url: "http://sdutta-cadence.cs21.force.com/public/CosLiteApp?id=",
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

   getFile(id, type) {
    const url = this.state.url + id;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.openFile(responseJson.Type, responseJson.Body);
    })
    .catch((error) => {
      console.error(error);
    });
  }

openFile = (type, body) => {
  if(type == "flv" || type == "mkv") {
    type = "mp4";
  }
    OpenFile.openDocb64([{
      base64: body,
      fileName:"sample",
      fileType:type,
      cache: true
    }], (error, url) => {
      if (error) {
        console.error(error);
      } else {
        console.log(url)
      }
    })
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
            <CardItem style={styles.card}>
              <Body>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <View style={{flex:5}}>
                    <View>
                      <TouchableOpacity  key={index} onPress={ () => {this.getFile(listItem.Id, listItem.Type)}}>
                        <Text style={{fontWeight: 'bold', color: '#5DADE2'}} numberOfLines={2}>
                          {listItem.Title} 
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>            
                        <Text style={{fontSize:10, fontWeight: 'normal'}} numberOfLines={2}>
                          {listItem.Description}
                        </Text>
                    </View> 
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
        </Card>
      );
    }, this)
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
 