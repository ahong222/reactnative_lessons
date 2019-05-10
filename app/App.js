/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeContainer from './HomeContainer';
export default class App extends Component<Props> {
  constructor(Props) {
    super(Props)
    this.state = {
      todoList: [{ title: 'Eat', status: false }, { title: 'Play', status: false }, { title: 'Sleep', status: false }],
    };
  }
  
  render() {
    return (
      <HomeContainer></HomeContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
