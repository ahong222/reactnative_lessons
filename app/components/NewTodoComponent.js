import React, { Component } from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';
import { newTodoAction } from '../actions';
import { connect } from 'react-redux';

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

class NewTodoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: null
    }
  }
  addTodo(text) {
    // this.props.addTodo && this.props.addTodo(this.state.todo)
    let { dispatch } = this.props;
    console.log('start add new todo:'+this.state.todo+" dispatch"+dispatch);
    dispatch(newTodoAction(text))
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
        <Button title="ADD" onPress={() => { this.addTodo(this.state.todo) }}></Button>
      </View>
    )
  }

}

// function mapStateToProps(state) {
//   return state
// }
export default connect(null)(NewTodoComponent)
