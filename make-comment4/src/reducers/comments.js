// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function (state, action) {
  if (!state) {
    state = { comments: [] }
  }
  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return { comments: action.comments }
      // 我们只存储了一个 comments 的状态，初始化为空数组。
      //当遇到 INIT_COMMENTS 的 action 的时候，会新建一个对象，然后用 action.comments 覆盖里面的 comments 属性。
      //这就是初始化评论操作。
    case ADD_COMMENT:
      // 新增评论
      return {
        comments: [...state.comments, action.comment] //数组的解构,更新state
      }
    case DELETE_COMMENT:
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex), //删除数组中下标为commentIdex的元素
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  // {
  //       username: this.state.username,
  //       content: this.state.content,
  //       createdTime: +new Date()
  //     }
  return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}
