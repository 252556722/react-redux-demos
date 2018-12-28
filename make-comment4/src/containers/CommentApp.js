import React, { Component } from 'react'
import YysCommentInput from './CommentInput'
import YysCommentList from './CommentList'

export default class CommentApp extends Component {
  render() {
    return (
      <div className='wrapper'>
      {/*  YysCommentInput，YysCommentList是经过高阶组件处理的组件，smart组件
          YysCommentInput，YysCommentList组件里边的mapStateToProp函数和mapDispatchToProps函数
          以及WrappedComponent原始组件在connect的时候就写死的了
          所以在高阶组件render的时候，原始组件的props的值就会根据store中的state的值和dispatch函数共同决定（操作）
      */}
        <YysCommentInput /> 
        <YysCommentList />
      </div>
    )
  }
}
