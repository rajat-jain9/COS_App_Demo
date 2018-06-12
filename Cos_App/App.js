import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigation from './src/Navigator/Navigation';

export default class App extends Component<Props> {
  render() {
    return (
      <Navigation/>
    );
  }
}

