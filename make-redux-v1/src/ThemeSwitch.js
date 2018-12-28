import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'
class ThemeSwitch extends Component {
    // static contextTypes = {
    //   store: PropTypes.object
    // }干掉改为
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
      }
  
    constructor () {
      super()
      this.state = { themeColor: '' }
    }
  
    componentWillMount () {
 debugger
    }
  
    // _updateThemeColor () {
    //   const { store } = this.context
    //   const state = store.getState()
    //   this.setState({ themeColor: state.themeColor })
    // }干掉
    //改为
    // dispatch action 去改变颜色
    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

  
    render () {
      debugger
      return (
        <div>
          <button
            style={{ color: this.props.themeColor }}
            onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
          <button
            style={{ color: this.props.themeColor }}
            onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
        </div>
      )
    }
  }
  const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onSwitchColor: (color) => {
        dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
    }
  }
  ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
  
  export default ThemeSwitch