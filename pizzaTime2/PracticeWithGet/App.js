import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RegForm from './app/components/RegForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RegForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  },
});
