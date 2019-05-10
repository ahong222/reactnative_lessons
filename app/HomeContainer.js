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
import { connect } from 'react-redux';



type Props = {};
class HomeContainer extends Component<Props> {
  constructor(Props) {
    super(Props)
  }
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000fff' }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          {/* <NewTodoComponent addTodo={(text)=>{this.addTodo(text)}}></NewTodoComponent> */}
          {/* <TodoListComponent todoList={this.state.todoList} toggleTodo={(index) => { this.toggleTodo(index) }} /> */}
          <TodoListComponent todoList={this.props.todoList} ></TodoListComponent>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state){
  return {
      todoList: state.todos,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
  }
}

export default connect(mapStateToProps)(HomeContainer)

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
