import React from 'react'
import { Button } from 'antd'

class TestChild extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('子组件挂载、更新之前')
        // 在这里判断是否需要更新state
        return nextProps.name === prevState.name ? null : {
            name: nextProps.name
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---子组件是否需要重新渲染呢？---', nextProps, nextState)
        return nextProps.name !== this.props.name
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('---子组件更新完毕---')
    }
    render() {
        
        return (
        <p>Child: {this.state.name}</p>
        )
    }
}

class LifeCycleDemo extends React.Component {
    state = {
        name: 'zhangjing',
        hasError: false
    }
    constructor(props) {
        super(props)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('父组件组件挂载、更新之前')
        // 在这里判断是否需要更新state
        return null
    }
    componentDidMount() {
        console.log('---组件挂载完毕---')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---我是否需要重新渲染呢？---')
        return nextState.name !== this.state.name
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('---父组件更新完毕---', snapshot.info)
    }
    // 建议使用getDerivedStateFromError代替componentDidCatch
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染可以显降级 UI
        return { hasError: true };
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 在最近一次render之后dom输出之前
        console.log('----即将输出dom')
        return {
            info: '77777'
        }
    }
    handleClick = () => {
        this.setState({
            name: 'zhangjing33'
        })
    }
    render() {
        console.log('---父组件已经调用render方法')
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