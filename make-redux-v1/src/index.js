
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YysHeader from './Header';
import YysContent from './Content';
import './index.css';
import { Provider } from './react-redux';
debugger;

function createStore (reducer) {
  debugger
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      debugger
      state = reducer(state, action)
      
      listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
  }
  
  const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'red'
    }//返回一个新的对象
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state //没有修改，返回原来的对象
    }
  }
  debugger
const store = createStore(themeReducer)
class Index extends Component {
    // static childContextTypes = {
    //   store: PropTypes.object
    // }
  
    // getChildContext () {
    //   return { store }
    // }干掉
  
    render () {
      debugger
      return (
        <div>
          <YysHeader /> 
          <YysContent />
        </div>
      )
    }
  }
// 把 Provider 作为组件树的根节点
ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.getElementById('root')
  )



  //mapStateToProp函数和mapStateToProps函数以及WrappedComponent原始组件在connect的时候就写死的了
  // class YysHeader extends Component {
//   static contextTypes = {
//       store: PropTypes.object
//   }
// //添加start
//   constructor() {
//     debugger
//       super()
//       this.state = { allProps: {} }
//   }
//   componentWillMount() {
//     debugger
//       this._updateProps()
//       debugger
//       const { store } = this.context
//       store.subscribe(() => this._updateProps())
//   }
//   _updateProps() {
//     debugger
//       // const { store } = this.context
//       // let stateProps = mapStateToProps(store.getState(), this.props) // 额外传入 props，让获取数据更加灵活方便
//       // this.setState({
//       //     allProps: { // 整合普通的 props 和从 state 生成的 props
//       //         ...stateProps,
//       //         ...this.props
//       //     }
//       // })干掉改为
//       const { store } = this.context
//       let stateProps = mapStateToProps
//         ? mapStateToProps(store.getState(), this.props)
//         : {} // 防止 mapStateToProps 没有传入
//       let dispatchProps = mapDispatchToProps
//         ? mapDispatchToProps(store.dispatch, this.props)
//         : {} // 防止 mapDispatchToProps 没有传入
//       this.setState({
//         allProps: {
//           ...stateProps,
//           ...dispatchProps,
//           ...this.props
//         }
//       })
//   }
// //添加end
//   render() {
//     debugger
//       // const { store } = this.context
//       // let stateProps = mapStateToProps(store.getState())
//       // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
//       // return <WrappedComponent {...stateProps} />

//       // 干掉改为
//       return <Header {...this.state.allProps} />//这里的Hearder原始的组件，是没有经高阶包装过的


//   }
// }

// Header,ThemeSwitch,Content生成各自的经高阶组件包装后的组件。
