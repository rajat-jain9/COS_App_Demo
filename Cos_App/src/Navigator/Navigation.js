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
  AuthPage: { screen: Authentication },
  SearchPage: { screen: SearchBar }, 
  SearchListPage: { screen: SearchList},
});

export default Navigation;