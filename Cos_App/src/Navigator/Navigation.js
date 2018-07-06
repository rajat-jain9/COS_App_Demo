import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Authentication from '../components/Authentication';
import SearchBar from '../components/Search';
import SearchList from '../components/SearchList';
import PDFViewer from '../components/PDFViewer';
import ImageViewer from '../components/ImageViewer';

const Navigation = StackNavigator({
  AuthPage: { screen: Authentication },
  SearchPage: { screen: SearchBar }, 
  SearchListPage: { screen: SearchList},
  PdfViewer: {screen: PDFViewer},
  ImgViewer: {screen: ImageViewer}
});

export default Navigation;