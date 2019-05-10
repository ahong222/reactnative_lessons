import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { changeTodoStatus } from '../actions';
import { connect } from 'react-redux';


class TodoListComponent extends Component {
  constructor(props) {
    super(props)
    console.log('mapStateToProps todoList:'+JSON.stringify(props))
  }
  toggleTodo(index) {
    // // this.props.toggleTodo && this.props.toggleTodo(index) 原始方法
    // //redux 方法，使用action
    // // 从 props 里解构出 dispatch，因此这里也要用到connect
    // let { dispatch } = this.props;              
    // //changeTodoStatus:将数据转换成action
    // dispatch(changeTodoStatus(index));          // 执行 dispatch(action)

    setTimeout(() => {                          // 延迟执行
      let { dispatch } = this.props;
      //changeTodoStatus:将数据转换成action
      dispatch(changeTodoStatus(index));          // 执行 dispatch(action)
    }, 2000);
  }

  render() {
    console.log('todoList1:'+JSON.stringify(this.props.todoList1))
    return (
      <View style={styles.wrapper}>
        {
          this.props.todoList.map(
            (todo, index) => {
              var finishStyle = {textDecorationLine:'line-through', color:'gray'}
              return (
                <TouchableOpacity onPress = {()=>this.toggleTodo(index)}>
                  <Text style = {[styles.todo,todo.status&&finishStyle]}>{todo.title}</Text>
                </TouchableOpacity>
              )
            }
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    wrapper: {
      paddingHorizontal: 20,
    },
    todo: {
      paddingVertical: 5,
    }
  }
)

function mapStateToProps(state){
  return {
      todoList1: state.todos,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
  }
}

export default connect(mapStateToProps)(TodoListComponent)