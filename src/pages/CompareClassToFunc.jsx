import React, { useState } from 'react'
import { Select } from 'antd'

import UserClass from '../components/classTest'
import UserFunc from '../components/funcTest'


class CompareClassToFunc extends React.Component {
    state = {
        user: 'Selina'
    }
    handleChange = value => {
        this.setState({
            user: value
        })
    }
    render() {
        return (
        < div className="compare-class-func">
            <div className="line-operation">
                <span className="label">user:</span>
                <Select defaultValue={this.state.user} onChange={this.handleChange}>
                    <option value="Selina"> Selina </option>
                    <option value="Sophia"> Sophia </option>
                </Select > 
            </div>
            <div className="line-operation">
                <span className="label">click to alert user:</span>
                <UserClass user={this.state.user} />
                <UserFunc user={this.state.user} />
            </div>
        </div>
        )
    }
}
// const CompareClassToFunc = (props) => {
//     const [user, setUser] = useState('Selina')
//     return (
//         < div className="compare-class-func">
//             <div className="line-operation">
//                 <span className="label">user:</span>
//                 <Select defaultValue={user} onChange={setUser}>
//                     <option value="Selina"> Selina </option>
//                     <option value="Sophia"> Sophia </option>
//                 </Select > 
//             </div>
//             <div className="line-operation">
//                 <span className="label">click to alert user:</span>
//                 <UserClass user={user} />
//                 <UserFunc user={user} />
//             </div>
//         </div>
//         )
// }

export default CompareClassToFunc

