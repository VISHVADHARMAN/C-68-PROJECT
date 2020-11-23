import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import inScreen from './screens/in';
import fbScreen from './screens/fb';

export default class App extends React.Component() {
  render(){
  return(
  <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram: { screen: inScreen },
  Facebook: { screen: fbScreen }
});

const AppContainer = createAppContainer(TabNavigator);
