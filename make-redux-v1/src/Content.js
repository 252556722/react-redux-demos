import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'

class Content extends Component {
    // static contextTypes = {
    //   store: PropTypes.object
    // }干掉改为

   static propTypes = {
    themeColor: PropTypes.string
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
    // }可以干掉
  
    render () {
      debugger
      return (
        <div>
          <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
          <ThemeSwitch />
        </div>
      )
    }
  }

//改为

const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
Content = connect(mapStateToProps)(Content)
export default Content