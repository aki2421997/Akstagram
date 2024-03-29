import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "#efeeee"
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <NavLink to='/all_post'>
          <Tab 
            label="All" />
        </NavLink>
        <NavLink to='/saved_post'>
          <Tab 
            label="Saved" />
        </NavLink>>
      </Tabs>
    </Paper>
  );
}