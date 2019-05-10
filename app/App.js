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
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { TOGGLE_STATUS, NEW_TODO } from './actions';

const initState = {
  todos: [
    { title: '吃早饭', status: true },
    { title: '打篮球', status: false },
    { title: '修电脑', status: false },
  ],
};

function todoList(state = [], action) {
  console.log('todoList index:' + JSON.stringify(action))
  switch (action.type) {
    case TOGGLE_STATUS:

      var todo = state[action.index];
      
      let  newState = [
        ...state.slice(0, action.index),
        Object.assign({}, todo, {
          status: !todo.status
        }),
        ...state.slice(action.index + 1)
      ]
      console.log('TOGGLE_STATUS index:'+action.index + ' delete:'+newState[action.index].status)
      return newState
    case NEW_TODO:
      var title = action.title;
      return [
        ...state.slice(),
        {
          title:title,
          status:false
        },
      ]
    default:
      return state
  }
}

const reducers = combineReducers({
  todos: todoList           // 这里的 key 要与初始数据的 key 一致
});


let store = createStore(reducers, initState)

// 使用中间件
// var thunkMiddleware = function ({ dispatch, getState }) {        // 定义中间件
//   console.log('Enter thunkMiddleware');
//   return function(next) {
//       console.log('－－－－－－－－》 Function "next" provided:', next);
//       return function (action) {
//           console.log('－－－－－－－－》 Handling action:', action);
//           return typeof action === 'function' ?
//               action(dispatch, getState) :
//               next(action)
//       }
//   }
// }
// let newCreateStoreFunction = applyMiddleware(thunkMiddleware)(createStore)
// let store = newCreateStoreFunction(reducers, initState)


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
