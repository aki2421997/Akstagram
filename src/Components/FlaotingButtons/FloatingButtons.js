import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'white',
    color: "grey"
  },
//   primary: {
//       backgroundColor: 'white'
//   }
}));

export function FloatingAddButton({handleClickOpen}) {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export function FloatingEditButton() {
    const classes = useStyles();
  
    return (
      <div>
        <Fab color="secondary" aria-label="edit" className={classes.fab}>
          <EditIcon />
        </Fab>
      </div>
    );
  }

export function FloatingDeleteButton() {
    const classes = useStyles();
  
    return (
      <div>
        <Fab disabled aria-label="delete" className={classes.fab}>
          <DeleteIcon />
        </Fab>
      </div>
    );
}
  