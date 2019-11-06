import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
import ImageGridList from '../Components/GridImg/GridImg'
import CenteredTabs from '../Components/CenteredTabs/CenteredTabs';
import { Divider } from '@material-ui/core';
import MyGrid from '../Components/MyGrid/MyGrid';

const useStyles = makeStyles({
  section: {
    float: "left",
    display: "flex",
    textAlign: "center",
    width:"30%",
  },
  userName: {
    fontFamily:"inherit",
    fontSize:"1.5rem",
    color: "dimgrey",
    fontWeight:"100"
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: "auto",
    width: 150,
    height: 150,
  },
  grid: {
    width: "30%"
  }
});

const Profile = () => {
    const classes = useStyles();
    return (
        <Box component="div" mx={3} px={3} pt={8}>
            <Box component="header" mb={6} height={150}>
                <Box component="section" display="flex" className={classes.section} mr={3}>
                    <Avatar alt="Remy Sharp" src="https://instagram.fdel27-1.fna.fbcdn.net/vp/3687bef463a1807877c63792e50158ba/5E63DA59/t51.2885-19/s150x150/41310244_617688428626633_6722511575095181312_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net" className={classes.bigAvatar} />
                </Box>
                <Box component="section" display="flex">
                    <Box component="div">
                        <h1 className={classes.userName}>Akshay Wanjari</h1>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Box component="div">
                <CenteredTabs/>
            </Box>
            <Box component="div">
                <MyGrid/>
            </Box>
        </Box>
    )
}

export default Profile
