export const TOGGLE_STATUS = 'ACTION_TOGGLE_STATUS'
export const NEW_TODO = 'ACTION_NEW_TODO'
//将数据和命令字符串，封装成Action
export function changeTodoStatus(index) {
  return { type: TOGGLE_STATUS, index: index }
}

export function newTodoAction(title) {
  return { type: NEW_TODO, title: title }
}