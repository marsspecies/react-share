import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const NotFound = props => {
    const history = useHistory()
    useEffect(() => {
        const timer = setTimeout(() => {
            history.push('/')
            clearTimeout(timer)
        }, 3000)
    });
    return (
        <>
            <div>404 not Found</div>
        </>
    )
}

export default NotFound
