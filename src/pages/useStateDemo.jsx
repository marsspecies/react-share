import React, { useState } from 'react';
import { Button } from 'antd'


const TestUseStateDemo = (props) => {
    const [count, setCount] = useState(0)
    console.log(22222222)
    return (<div>
        <p>You clicked {count}</p>
        <Button onClick={() => setCount(count + 1)}>click me</Button>
    </div>)
}

export default TestUseStateDemo
