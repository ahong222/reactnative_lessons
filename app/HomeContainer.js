/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoListComponent from './components/TodoListComponent';
import NewTodoComponent from './components/NewTodoComponent';



type Props = {};
export default class HomeContainer extends Component<Props> {
  constructor(Props) {
    super(Props)
    this.state = {
      todoList: [{ title: 'Eat', status: false }, { title: 'Play', status: false }, { title: 'Sleep', status: false }],
    };
  }
  toggleTodo(index) {
    var todoList = this.state.todoList
    var todo = todoList[index]
    if (todo) {
      todo.status = !todo.status
      this.setState({
        todoList: todoList
      })
    }
  }
  addTodo(text) {
    var todoList = this.state.todoList
    todoList.push({
      title: text,
      status: false
    })
    this.setState({
      todoList: todoList
    })
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000fff' }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          {/* <NewTodoComponent addTodo={(text)=>{this.addTodo(text)}}></NewTodoComponent> */}
          {/* <TodoListComponent todoList={this.state.todoList} toggleTodo={(index) => { this.toggleTodo(index) }} /> */}
          <TodoListComponent todoList={[{title:'测试数据00'}]} ></TodoListComponent>
        </View>
      </SafeAreaView>
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
