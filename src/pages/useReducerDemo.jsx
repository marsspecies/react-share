import React, { useReducer } from 'react'
import { Button } from 'antd'

function init(initCount) {
    return {count: initCount}
}

// 定义一个响应数据的纯函数
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return init(action.payload)
        default: 
            return state
    }
}

function TestUseReducerDemo(props) {
    // 如果不传第三个参数，则第二个参数为默认的state初始值
    const [state, dispatch] = useReducer(reducer, 0, init)

    return (
        <div>
            <p>count: {state.count}</p>
            <Button onClick={() => dispatch({type: 'increment'})}>increment</Button>
            <br />
            <br />
            <Button onClick={() => dispatch({type: 'decrement'})}>decrement</Button>
            <br />
            <br />
            <Button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</Button>
        </div>
    )
}


export default TestUseReducerDemo
