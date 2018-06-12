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
  AuthPage: { screen: Authentication }, 
  SearchListPage: { screen: SearchList},
});

export default Navigation;