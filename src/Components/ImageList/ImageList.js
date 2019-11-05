import React from '../../../node_modules/react'
// import ImgCap from '../ImgCap/ImgCap'
import PostedCard from '../PostedCard/Postedcard'
import {connect} from 'react-redux'
import './ImageList.css'
 
const getVisibleTodos = (todos,filter) => {
  console.log(filter)
  switch (filter) {
      case 'SHOW_ALL':
          return todos;
      case 'SHOW_SAVE':
          return todos.filter(
              t => t.save 
          );
      default:
          break;
  }
}

const mapStateToProps = (state) => ({list:getVisibleTodos(state.todos,state.visibilityFilter)});
const mapDispatchToProps = (
  dispatch
) => ({
    onImgClick: (id) => {
      dispatch({
        type: 'LIKE_IMG',
        id
      });
    },
    onImgSave: (id) => {
      dispatch({
        type: 'SAVE_IMG',
        id
      });
    }
  })

const ImageList = (props) => {
    return (
      <div>
        <div className='row d-flex justify-content-center list' on> 
            {props.list.map((item) => (
                // <ImgCap key={item.id} image={item.image} text={item.caption} onImgClick={props.onImgClick} id={item.id} liked={item.liked}/>
                <PostedCard key={item.id} image={item.image} text={item.caption} onImgClick={props.onImgClick} onImgSave={props.onImgSave} id={item.id} liked={item.liked} save={item.save} ratio={item.ratio} border="2px"/>
            ))}
        </div>
      </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageList)
