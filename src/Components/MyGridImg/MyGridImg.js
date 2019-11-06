import React from 'react';
import './MyGridImg.css';


const imageContainer = {
    width:"100%",
    height:"200px",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    overFlow:"hidden"
}

const MyGridImg = (props) => {
    return (
        <div style={{width:"33.33%",float:"left",padding:"8px"}} >
            <div style={{backgroundImage:`url(${props.src})`,backgroundRepeat:"no-repeat",paddingTop:"100%",height:0,backgroundSize:"cover",backgroundPosition:"center",boxSizing:"border-box"}}>
            </div>
        </div>
    )
}

export default MyGridImg
