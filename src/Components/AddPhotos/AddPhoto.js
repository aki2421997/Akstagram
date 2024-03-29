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
          caption:inputText.value
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

    
    const onChangeFile = event => {
        console.log(event.target.files+"<<<<<<<<<<<<<<<<<<<<<<<<<<")
        event.stopPropagation();
        event.preventDefault();
        
        file = URL.createObjectURL(event.target.files[0]);
        console.log(event.target.files[0])
    };

    let input = "";

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Add Photo
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Image Upload
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div className="custom-file">
                            <input
                                className="custom-file-input"
                                id="customFile"
                                type="file"
                                onChange={event => onChangeFile(event)}
                                accept="image/jpg,image/jpeg,image/png,image/
                                jfif"
                            />
                            <label className="custom-file-label" for="customFile">
                                Choose file
                            </label>
                        </div>
                    </Typography>
                    <Typography gutterBottom>
                        <TextareaAutosize
                            ref = {element => { inputText = element; }}
                            aria-label="minimum height"
                            rows={3}
                            placeholder="Add Caption"
                        />
                    </Typography>
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



