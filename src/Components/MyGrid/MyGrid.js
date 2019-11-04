import React from 'react'
import './MyGrid.css'

const MyGrid = ({src}) => {
    
console.log("got it"+{src})
    return (
        <div>
            <div className="divBgImg" style={{backgroundImage: src}}>
            </div>
        </div>
    )
}

export default MyGrid
