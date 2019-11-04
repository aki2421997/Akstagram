import React from 'react'
import './NavbarFixed.css'
import CustomizedDialogs from '../AddPhotos/AddPhoto'


const NavbarFixed = () => {
    return (
        <div className='row d-flex justify-content-center'>
            <nav className="navbar navbar-dark fixed-top outerNav">
                <input placeholder="Search" type="text" className="form-control form-control-sm outerNav__searchBar"></input>
                <CustomizedDialogs/>
            </nav> 
        </div>
    )
}
export default NavbarFixed
