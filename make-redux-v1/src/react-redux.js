import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Provider extends Component {
    static propTypes = {
      store: PropTypes.object,
      children: PropTypes.any
    }
  
    static childContextTypes = {
      store: PropTypes.object
    }
  
    getChildContext () {
      return {
        store: this.props.store //它还会把外界传给它的 props.store 放到 context，这样子组件 connect 的时候都可以获取到。
      }
    }
  
    render () {
      debugger
      return (
        <div>{this.props.children}</div>
      )
    }
  }
export const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
  debugger
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
    //添加start
        constructor() {
          debugger
            super()
            this.state = { allProps: {} }
        }
        componentWillMount() {
          debugger
            this._updateProps()
            debugger
            const { store } = this.context
            store.subscribe(() => this._updateProps())
        }
        _updateProps() {
          debugger
            // const { store } = this.context
            // let stateProps = mapStateToProps(store.getState(), this.props) // 额外传入 props，让获取数据更加灵活方便
            // this.setState({
            //     allProps: { // 整合普通的 props 和从 state 生成的 props
            //         ...stateProps,
            //         ...this.props
            //     }
            // })干掉改为
            const { store } = this.context
            let stateProps = mapStateToProps
              ? mapStateToProps(store.getState(), this.props)
              : {} // 防止 mapStateToProps 没有传入
            let dispatchProps = mapDispatchToProps
              ? mapDispatchToProps(store.dispatch, this.props)
              : {} // 防止 mapDispatchToProps 没有传入
            this.setState({
              allProps: {
                ...stateProps,
                ...dispatchProps,
                ...this.props
              }
            })
        }
    //添加end
        render() {
          debugger
            // const { store } = this.context
            // let stateProps = mapStateToProps(store.getState())
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            // return <WrappedComponent {...stateProps} />

            // 干掉改为
            return <WrappedComponent {...this.state.allProps} />


        }
    }

    return Connect
}
