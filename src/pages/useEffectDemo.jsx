import React, { useState, useEffect} from 'react'
import { Button } from 'antd'

const TestUseEffectDemo = (props) => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({
        name: 'zhangjing'
    })

    const [username, setUsername] = useState('zhangjing')

    // 每一次渲染完都会执行
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    // 仅仅当username变化的时候才执行
    useEffect(() => {
        console.log('username 改变了')
    }, [username])

    // 只比较对象的引用
    useEffect(() => {
        console.log('user 改变了')
    }, [user])

    user.name = 'zhangjing1'

    return (<div>
        <p>You clicked {count}</p>
        <Button onClick={() => setCount(count+ 1)}>click me</Button>
        <br />
        <br />
        <p>username: {username.name}</p>
        <Button onClick={() => setUsername('zhangjing1')}>click me to setUsername</Button>
        <br />
        <br />
        <p>test change a object</p>
        <Button onClick={() => setUser({})}>click me to change user</Button>
    </div>)
}

export default TestUseEffectDemo