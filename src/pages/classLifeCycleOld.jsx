import React from 'react'
import { Button } from 'antd'

class TestChild extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('---子组件接收到了新的属性---', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---子组件是否需要重新渲染呢？---', nextProps, nextState)
        return nextProps.name !== this.props.name
    }
    componentWillUpdate(){
        console.log('---子组件即将更新---')
    }
    componentDidUpdate() {
        console.log('---子组件更新完毕---')
    }
    render() {
        return (
        <p>child: {this.state.name}</p>
        )
    }
}
const MyContext= React.createContext({
    color: '#f00'
})
class LifeCycleDemo extends React.Component {
    state = {
        name: 'zhangjing',
        hasError: false
    }
    static contextType = MyContext
    constructor(props, context) {
        super(props)
        console.log('-----组件初始化-----', context)
    }
    componentWillMount(){
        console.log('---父组件即将挂载---')
    }
    componentDidMount() {
        console.log('---父组件挂载完毕---')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---父组件是否需要重新渲染呢？---')
        return true
    }
    componentWillUpdate(nextProps, nextState){
        console.log('---父组件即将更新---')
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('---父组件更新完毕---')
    }
    componentWillUnmount() {
        console.log('---父组件即将卸载---')
    }
    componentDidCatch(error, info) {
        console.error('---组件发生了错误---', info)
        this.setState({
            hasError: true
        })
    }
    handleClick = () => {
        this.setState({
            name: 'zhangjing'
        })
    }
    render() {
        if (this.state.hasError) {
            // 你可以渲染任何自定义的降级 UI
            return <h1>Something went wrong.</h1>;
        }
        return (
            <div>
                <p>my name: {this.state.name}</p>
                <Button onClick={this.handleClick}>click to change state</Button>
                <br />
                <br />
                <TestChild name={this.state.name} />
            </div>
        )
    }
}

export default LifeCycleDemo