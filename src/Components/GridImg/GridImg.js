import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {withRouter} from 'react-router-dom';
// import tileData from './tileData';
import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
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
        case 'liked_post':
            return todos.filter(
              t => t.liked 
          );
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

function ImageGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.list.map(tile => (
          <GridListTile key={tile.image} cols={1}>
            <img src={tile.image} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImageGridList))