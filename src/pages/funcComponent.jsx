import React from 'react'

const Child = (props) => {
    const { list } =props

    return (
        <div>
            {
                list.map((item, key) => {
                return <p key={key}>{item.name}</p>
                })
            }
        </div>
    )
}

function FuncCompoenent(props) {
    const list = [
        {
            name: 'zhangjing'
        },
        {
            name: 'Karen'
        }
    ]
    return (
        <div>
            <Child list={list} />
        </div>
    )
}



export default FuncCompoenent