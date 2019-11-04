import React from 'react'
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h3>React router tutorial</h3>
            <small>Main Page</small>
            <Link to="/users">user list</Link>
        </div>
    )
}

export default MainPage;
