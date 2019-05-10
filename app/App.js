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
import {createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';  

const initState = {
  todos: [
    { title: '吃早饭', status: true },
    { title: '打篮球', status: false },
    { title: '修电脑', status: false },
  ],
};

function todoList(state = [], action) {
  return state;
}

const reducers = combineReducers({
  todos: todoList           // 这里的 key 要与初始数据的 key 一致
});


let store = createStore(reducers, initState)

export default class App extends Component<Props> {
  constructor(Props) {
    super(Props)
  }

  render() {
    return (
      <Provider store={store}>
        <HomeContainer></HomeContainer>
      </Provider>
    );
  }
}
