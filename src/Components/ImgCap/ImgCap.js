import React from '../../../node_modules/react';
import './ImgCap.css';

const ImgCap = ({liked,image,text,onImgClick,id}) => {
    const handleLike = () => {
        console.log(id)
        onImgClick(id)
    }
    console.log(id+"   "+liked);
    return (
        <div className = 'card col-sm-6 box '>
            {/* <div class="card-header box__header">
                Featured
            </div> */}
            <img src={image} className="card-img-top" alt="..." onDoubleClick={() => {handleLike()}}></img>
            <div className="card-body">
                {liked?(<button type="button" class="btn btn-default btn-sm"><span className="glyphicon glyphicon-heart box__icon__liked"></span></button>):(<button type="button" class="btn btn-default btn-sm"><span className="glyphicon glyphicon-heart-empty box__icon__unliked"></span></button>)}
                <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-bookmark box__icon__unliked"></span> 
                </button>
                <h5 className="card-title box__title">Card title</h5>
                <p className="card-text box__text">{text}</p>
            </div>
        </div>
    )
}

export default ImgCap
