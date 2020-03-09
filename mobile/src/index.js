import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import './config/ReactotronConfig';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
console.tron.log('ola!')
export default function App() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}> Welcome To o'Barber</Text>
        <Text style={style.welcome}> Abaixo</Text>
      </View>
    );
  }


