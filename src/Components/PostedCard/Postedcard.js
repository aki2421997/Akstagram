import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './PostedCard.css'

// var ratio1 = "100%";
var useStyles = makeStyles(theme => ({
  root: {
    color:"red",
  },
  save: {
    color: "grey"
  },
  button: {
    color: "lightblue",
    padding: "27px 12px 10px",
    width: '20%',
    boxSizing: 'border-box'
  },
  card: {
    maxWidth: 640,
    borderRadius: 0,
    margin: "auto"
  },
  media: {
    height: 0,
    paddingTop: props => `${props.ratio}%`
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  input: {
      backgroundColor: "white",
      width: "80%",
      boxSizing: 'border-box'
  }
}));

export default function PostedCard(props) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState(false);

  console.log(`ratio=${props.ratio}`);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className ="container card--posted">  
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src="https://instagram.fdel27-1.fna.fbcdn.net/vp/3687bef463a1807877c63792e50158ba/5E63DA59/t51.2885-19/s150x150/41310244_617688428626633_6722511575095181312_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net" className={classes.avatar}>
      
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Akshay Wanjari"
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => props.onImgClick(props.id)}>
            {props.liked ? <FavoriteIcon className={classes.root}/> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <IconButton aria-label="bookmark" onClick={() => props.onImgSave(props.id)}>
            {props.save ? <BookmarkIcon className={classes.save}/> : <BookmarkBorderOutlinedIcon />}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
      {/* <TextField
        id="filled-full-width"
        className={classes.input}
        placeholder="Add a comment .."
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button disabled className={classes.button}>
        Post
      </Button> */}
    </Card>
    </div>
  );
}