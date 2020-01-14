import React from 'react'

import { Spin } from 'antd'


function Loading(props) {
    return (
        <div>
            <Spin tip="Loading..." />
        </div>
    )
}

export default Loading