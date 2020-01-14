import React, { useContext, useState } from 'react'
import { Button } from 'antd'

const user = {
    name: 'zhangjing',
    userInfor: {
        age: 18
    }
}
// 给context的默认值为user
const MyContext = React.createContext(user)

const Child = (props) => {
    const getContext = useContext(MyContext)
    console.log(getContext)
    return (
        <div>
            <p>name: {getContext.name} </p>
            <MyContext.Consumer>
                {
                    ({name, toggleContext}) => {
                        return (
                            <div>
                                <p>Child: {name}</p>
                                {
                                    toggleContext && <Button onClick={() => toggleContext({name: 'Jack'})}>toggle context</Button>
                                }
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}

function TestUseContextDemo() {
    const [context, setContext] = useState({
        name: 'Karen',
        userInfo: {
            age: 18
        },
        toggleContext: (newContext) => {
            setContext(Object.assign({}, context, newContext))
        }
    })
    // 在父级有使用provider的情况下获取的context为value属性的值，如果不传value则默认值为Undefined
    return (
        <div>
            <MyContext.Provider value={context}>
                <Child />
            </MyContext.Provider>      
            <Child />
        </div>
    )
}

export default TestUseContextDemo
