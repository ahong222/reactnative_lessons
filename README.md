使用redux开发 Todo


正式使用Redux
1.先创建一个外层的Component，包含之前的组件，实际相当于多包了一层view
2.在这个render方法中，return的view外层再加一层Provider
provider主要提供store <Provider store={store} />
而store 是通过createStore，包含reducer 和 状态对象，
状态对象至少包含数据 initState = {
    todos: [
        {title:'吃早饭',status:true},
        {title:'打篮球',status:false},
        {title:'修电脑',status:false},
    ],
};

reducer 主要是一个通过action+state返回state的纯函数， 是通过combineReducers来的
function todoList(state=[], action){
    return state;
}
reducers = combineReducers({
    todos: todoList           // 这里的 key 要与initState的 key 一致
});

同时provider的子控件，要想拿到全局的store，可以通过connect，吧state中的某个内容注入到props中
function mapStateToProps(state){
  return {
      todoList: state.todos,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
  }
}
export default connect(mapStateToProps)(HomeContainer)

这样就可以通过 this.props.todoList来使用了
如果不需要从state中取数据到props。connect(null)(TodoListComponent)即可

