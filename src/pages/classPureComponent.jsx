import React, { PureComponent } from 'react'
import { Button } from 'antd'


class TestPureComponent extends PureComponent {
    state = {
        userInfo: {
            name: 'zhangjing'
        },
        name: 'zhangjing'
    }
    handleClickString = () => {
        this.setState({
            name: 'zhangjing'
        })
    }
    handleClickObject = () => {
        this.setState({
            userInfo: {
                name: 'zhangjing'
            }
        })
    }
    render() {
        console.log('render---')
        return (
            <div>
                <p>my name: {this.state.name}</p>
                <Button onClick={this.handleClickString}>click to change state value of string</Button>
                <br />
                <br />
                <Button onClick={this.handleClickObject}>click to change state value of object</Button>
            </div>
        )
    }
}

export default TestPureComponent