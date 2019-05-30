

export const TOGGLE_STATUS = 'ACTION_TOGGLE_STATUS'
export const NEW_TODO = 'ACTION_NEW_TODO'
export const INIT_TODO_LIST = 'ACTION_INIT_TODO_LIST'

//将数据和命令字符串，封装成Action
export function changeTodoStatus(index) {
  return { type: TOGGLE_STATUS, index: index }
}

export function newTodoAction(title) {
  return { type: NEW_TODO, title: title }
}

export default function fetchData(action, params, method='get'){
  return fetch('http://192.168.1.196:3000/api/'+action,{
      method: method,
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: params ? JSON.stringify(params) : null
  })
  .then((response)=>{
      return response.json()
  }).catch((err)=> {
    return {
      todos: [
        { title: '跑步', status: true },
        { title: '购物', status: false },
        { title: '睡觉', status: false },
      ],
    }
  });
}

export function fetchDataAction(params) {
  console.log('todoList init fetchDataAction')
  return fetchPromize().then(
    (response)=>{
      console.log('promize data:'+response)
      console.log('promize data json:'+JSON.parse(response))
    }
  )
}

export function fetchPromize() {
  var myFirstPromise = new Promise(function (resolve, reject) {
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function () {
      resolve("成功!"); //代码正常执行！
    }, 250);
  });

  return myFirstPromise
}