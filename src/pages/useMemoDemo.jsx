import React, { useState, useMemo} from 'react'
import { Button } from 'antd'

function Timer() {
    return (
        <span>time: {Date.now()}</span>
    )
}
const MemoTimer = React.memo(Timer)
function Counter(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('zhangjing')

    // 只有当依赖项count改变的时候才会执行回调函数重新计算值
    const memorizedValue = useMemo(() => {
        console.log('double重新计算了')
        return count * 2
    }, [count])

    // 记忆组件，在渲染期间执行，仅当依赖项name改变的时候重新渲染组件
    const memorizedComponent = useMemo(() => {
        return <Timer />
    }, [name])
    
    // 被记忆的函数，只有当依赖项改变的时候才会改变函数的引用
    const memorizeFunction = useMemo(() => {
        return () => {
            setCount(count + 1)
        }
    }, [])
    return (
        <div>
            <p>count: {count}</p>
            <p>doubleCount: {memorizedValue}</p>
            <Button onClick={() => setCount(count + 1)}>click to add count</Button>
            <br />
            <br />
            <p>name: {name}</p>
            <Button onClick={() => setName('zhangjing'+ count + 1)}>click to set name</Button>
            <br />
            <br />
            <p>not memorized component: <Timer /></p>
            <p>memorized component: {memorizedComponent}</p>
            <br />
            <br />
            <p>not memorized function: <MemoTimer onClick={() => setCount(count + 1)} /></p>
            <p>memorized function: <MemoTimer onClick={memorizeFunction} /></p>
            
        </div>
    )
}

export default Counter