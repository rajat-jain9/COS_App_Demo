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
import ContentViewer from '../components/ContentViewer';

const Navigation = StackNavigator({
  SearchPage: { screen: SearchBar }, 
  SearchListPage: { screen: SearchList},
  ContentPage: { screen: ContentViewer},
  AuthPage: { screen: Authentication },
});

export default Navigation;