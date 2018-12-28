import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments' 
import './index.css'

const store = createStore(commentsReducer)

ReactDOM.render(
// //所有组件的父组件，共享store，与context关联的
  <Provider store={store}> 
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);

