import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
  
    // componentWillMount () {
    //     const { store } = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }
  
    // _updateThemeColor () {
    //   const { store } = this.context
    //   const state = store.getState()
    //   this.setState({ themeColor: state.themeColor })
    // }干掉
  
    render () {
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
  Header = connect(mapStateToProps)(Header)
export default Header