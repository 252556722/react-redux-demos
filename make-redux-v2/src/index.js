// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
// import Header from './Header'
// import Content from './Content'
// import './index.css'
// import { Provider } from './react-redux'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './Header'
import Content from './Content'
import './index.css'
// function createStore (reducer) {
//     let state = null
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//       state = reducer(state, action)
//       listeners.forEach((listener) => listener())
//     }
//     dispatch({}) // 初始化 state
//     return { getState, dispatch, subscribe }
//   }使用第三方的createStore了
  
  const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'red'
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
  }
  
const store = createStore(themeReducer)
class Index extends Component {
    // static childContextTypes = {
    //   store: PropTypes.object
    // }
  
    // getChildContext () {
    //   return { store }
    // }干掉
  
    render () {
      return (
        <div>
          <Header />
          <Content />
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