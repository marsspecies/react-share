import React from 'react'
import { Button } from 'antd'

class User extends React.Component {
    showMessage = () => {
        alert('function, ' + this.props.user)
    }
    handleClick = () => {
        setTimeout(this.showMessage, 3000)
    }
    render() {
        return <Button onClick={this.handleClick}>classBtn</Button>
    }
}

export default User