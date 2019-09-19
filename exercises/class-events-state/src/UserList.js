import React from 'react'
import User from './User.js'

const UserList = props => {
    const mappedUsers = props.users.map(user => 
                        <User 
                            name={user.name} 
                            key={Math.random()}
                            sayName={props.sayName}/>)

    return (
        <div>
            { mappedUsers }
        </div>
    )
}

export default UserList


