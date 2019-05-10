import React, { Component } from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  }
})

export default class NewTodoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: null
    }
  }
  addTodo() {
    this.props.addTodo && this.props.addTodo(this.state.todo)
  }

  setTodo(text: string) {
    this.setState({
      todo: text
    })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput style={styles.input} onChangeText={(text) => { this.setTodo(text) }} ></TextInput>
        <Button title="ADD" onPress={() => { this.addTodo() }}></Button>
      </View>
    )
  }


}
