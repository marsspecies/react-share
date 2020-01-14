import React from 'react'
import { Button } from 'antd'

const ChildShallow = React.memo((props) => {
    console.log('ChildShallow渲染了---')
    return (
        <div>
            <p>ChildShallow：{props.name}</p>
        </div>
    )
})


// React.memo只传一个参数默认浅比较， 传入第二个参数为一个函数的时候，会根据自定义的函数进行比较，该函数默认接收两个参数
const ChildDeep = React.memo((props) => {
    console.log('ChildDeep渲染了---')
    return (
        <div>
            <p>ChildDeep: {props.user.name}</p>
        </div>
    )
}, (prevProps, nextProps) => {
    return prevProps.user.name === nextProps.user.name
})

const ChildNormal = props => {
    console.log('ChildNormal渲染了---- ')
    return (
        <div>this  is a normal child</div>
    )
}

class TestMemo extends React.Component {
    state = {
        name: 'zhangjing',
        user: {
            name: 'zhangjing'
        },
        count: 0
    }
    handleChick = () => {
        this.setState({
            name: 'zhangjing11',
            user: {
                name: 'zhangjing'
            }
        })
    }
    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <ChildNormal />
                <br />
                <br />
                <ChildShallow name={this.state.name} />
                <br />
                <br />
                <ChildDeep user={this.state.user} />
                <br />
                <br />
                <Button  onClick={this.handleChick}>click to change state</Button>
                <br />
                <br />
                <Button onClick={this.handleCount}>add count</Button>
                <p>{this.state.count}</p>
            </div>
            
        )
    }
}



export default TestMemo