import React, { memo, useCallback, useState } from 'react'
import { Button } from 'antd'

function Timer() {
    return (
        <span>time: {Date.now()}</span>
    )
}
const MemoTimer = memo(Timer)

function UseCallbackDemo(props) {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
    const memorizedFunction = useCallback(handleClick, [])
    return (
        <div>
            <p>count: {count}</p>
            <Button onClick={handleClick}>add count</Button>
            <p>not memorized function: <Timer onclick={handleClick} /> </p>
            <p>memorized function: <MemoTimer onclick={memorizedFunction} /></p>
        </div>
    )
}

export default UseCallbackDemo
