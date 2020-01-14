import React from 'react'
import { Button } from 'antd'

function User(props) {
    const showMessage = () => {
        alert('functon, ' +  props.user)
    }
    const handleClick = () => {
        setTimeout(showMessage, 3000)
    }
    return <Button onClick={handleClick}>funBtn</Button>
}

export default User

