import React from 'react'

const UsersPage = () => {
    return (
        <div>
            <ul>
                {["alex","John","jaz"].map((user,idx)=>{
                    return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>
    )
}

export default UsersPage
