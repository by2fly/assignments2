import React from 'react'

const User = props => {
    return (
        <div>
            <h1>{ props.name }</h1>
            <button onClick={() => props.sayName(props.name)}>Alert Name</button>
        </div>
    )
}

export default User
