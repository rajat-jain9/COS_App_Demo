import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Pdf from 'react-native-pdf';

export default class PDFViewer extends Component {

	constructor() {
    super();
    this.state = {
      status: "Loading PDF....",
      pages: "",
      cpage: "",
      slash: "",
      str: "Loading......"
    }
  }

  static navigationOptions = {
    title: 'PDF Viewer',
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
		var {params} = this.props.navigation.state;
		var body = params.body;
		const url = "data:application/pdf;base64," + body;
		const source = {uri:url};

    return (
      <View style={styles.container}>
      <Text style={{color: 'green'}}>{this.state.status}{this.state.pages}{this.state.slash}{this.state.cpage}</Text>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages,filePath)=>{
              console.log(`number of pages123: ${numberOfPages}`);
              this.setState({status: ""});
              this.setState({pages: numberOfPages});
              this.setState({slash: "/"})
          }}
          onPageChanged={(page,numberOfPages)=>{
              console.log(`current page: ${page}`);
              this.setState({cpage: page});
          }}
          onError={(error)=>{
              console.log(error);
          }}
          style={styles.pdf}
        />
      </View>
    );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: "#fff"
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        backgroundColor: "#fff"
    }
});
