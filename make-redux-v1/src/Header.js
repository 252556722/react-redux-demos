import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'
class Header extends Component {
    // static contextTypes = {
    //   store: PropTypes.object
    // } 干掉改为使用props的形式拿数据
    static propTypes = {
        themeColor: PropTypes.string
      }
  
    constructor () {
      super()
      this.state = { themeColor: '' }
    }
  
    componentWillMount () {
      debugger
        // const { store } = this.context
        // this._updateThemeColor()
        // store.subscribe(() => this._updateThemeColor())
    }
  
    // _updateThemeColor () {
    //   // const { store } = this.context
    //   // const state = store.getState()
    //   // this.setState({ themeColor: state.themeColor })
    // }干掉
  
    render () {
      debugger
      return (
        <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
      )
    }
  }
  const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       onSwitchColor: (color) => {
//         dispatch({ type: 'CHANGE_COLOR', themeColor: color })
//       }
//     }
//   }
debugger

// class Connect extends Component {
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
//       return <Header {...this.state.allProps} />


//   }
// }

  Header = connect(mapStateToProps)(Header)
export default Header