/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import Login from './app/components/Login'
import Profile from './app/components/Profile'

// add all screens here to navigator
const Application = StackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile }
  }, {
    navigationOptions: {
      header: false,
    }

});

export default class App extends Component<{}> {
  render() {
    return (
     <Application />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
