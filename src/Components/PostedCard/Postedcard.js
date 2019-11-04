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

var ratio = "100%";
var useStyles = makeStyles(theme => ({
  root: {
    color:"red"
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
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "100%",
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

function handleSize(image) {
  console.log("image>>>>>>>")
  if(image!=null){
    ratio = (image.naturalHeight/image.naturalWidth)*100;
    console.log(image.naturalWidth, image.naturalHeight,ratio);
  }
}

export default function PostedCard({liked,image,text,onImgClick,id,onImgSave,save}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  
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
      <img src={image} alt="dfd" ref={image => handleSize(image)} style={{display:"none"}}></img>
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => onImgClick(id)}>
            {liked ? <FavoriteIcon className={classes.root}/> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <IconButton aria-label="bookmark" onClick={() => onImgSave(id)}>
            {save ? <BookmarkIcon className={classes.save}/> : <BookmarkBorderOutlinedIcon />}
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
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
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