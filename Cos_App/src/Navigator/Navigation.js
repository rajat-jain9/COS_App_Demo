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

const Navigation = StackNavigator({
  SearchPage: { screen: SearchBar }, 
  SearchListPage: { screen: SearchList},
  AuthPage: { screen: Authentication },
});

export default Navigation;