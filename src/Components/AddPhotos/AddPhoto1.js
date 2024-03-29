import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { v4 } from 'node-uuid';
import {FloatingAddButton} from '../FlaotingButtons/FloatingButtons'
import { classes } from "istanbul-lib-coverage";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

let file = undefined;
let inputText = "";
let imgRatio = "";
const mapStateToProps = (
    state
  ) => {
    return {
    }
  };

  const mapDispatchToProps = (
    dispatch
  ) => {
    return {
      onClick: () => {
        dispatch({
          type: 'ADD_IMG',
          id:v4(),
          image:file,
          caption:inputText.value,
          ratio: imgRatio
        });
      }
    };
  }

const CustomizedDialogs = (props) => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if(file !== undefined)
            props.onClick();
        file = undefined;
        setOpen(false);
    }

    
    const onChangeFile = (event) => {
        var height = "";
        event.stopPropagation();
        event.preventDefault();
        file = URL.createObjectURL(event.target.files[0]);
        var image = document.createElement('img');
        image.src = file;
        image.alt="not yet"
        image.style.display = "block"
        image.addEventListener("load",function(){
            height = getDimension(this);
            console.log(inputText)
            inputText.style.marginBlockStart= `0.1rem + ${height}px`
        })
        image.style.maxWidth = "200px";
        image.style.maxHeight = "200px";
        image.style.objectFit = "contain";
        image.style.marginBlockStart = "0.2rem"
        inputNode.insertAdjacentElement("beforeBegin",image);
    };

    function getDimension(element){
        imgRatio = (element.offsetHeight/element.offsetWidth)*100;
        return element.offsetHeight;
    }

    let inputNode = "";
    return (
        <div>
            <FloatingAddButton handleClickOpen={handleClickOpen}/>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Image Upload
                </DialogTitle>
                <DialogContent dividers>
                        <div id="in" className="custom-file">
                            <input
                                className="custom-file-input"
                                id="customFile"
                                type="file"
                                onChange={event => {onChangeFile(event)}}
                                accept="image/*"
                            />
                            <label className="custom-file-label" for="customFile">
                                Choose file
                            </label>
                        </div>
                        <div style={{marginBlockStart:"0.3rem"}} ref = {node => {inputNode = node}}>
                            <TextareaAutosize
                                ref = {element => { inputText = element; }}
                                aria-label="minimum height"
                                rows={3}
                                placeholder="Add Caption"
                            />
                        </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


export default connect(mapStateToProps,mapDispatchToProps)(CustomizedDialogs);



