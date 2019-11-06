import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
// import tileData from './tileData';
import {connect} from 'react-redux'
import MyGridImg from '../MyGridImg/MyGridImg';
import "./MyGrid.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#efeeee",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const getVisibleTodos = (todos,filter) => {
    console.log(filter)
    switch (filter) {
        case 'all_post':
            return todos
        case 'saved_post':
            return todos.filter(
                t => t.save 
            );
        default:
            return todos;
    }
}

const mapStateToProps = (state,{match}) => ({list:getVisibleTodos(state.todos,match.params.filter)});//own props instead of filter
const mapDispatchToProps = (
    dispatch
  ) => ({})

function MyGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{width:"100%"}}>
        {props.list.map(tile => (
            <MyGridImg key={tile.image} src={tile.image}/>
        ))}
      </div>
    </div>
  );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyGrid))