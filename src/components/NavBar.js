import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import logo from "../images/coding1a.png";
import { Link, animateScroll as scroll } from "react-scroll";
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const linksNav = [
    {
        id: 'about',
        text: 'About Me',
        // icon: icon,
    }
]

const NavBar = () => {

const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root} >
        <Toolbar className={classes.toolbar} >
            <img src={logo} className={classes.logo} alt="No-connection" />
        </Toolbar>
    </AppBar>
  )
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    root: {
        backgroundColor: "#FFE082",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        aliginItems: "center",
    },
    logo:{
      height: "2rem",
      width: "2rem",
      objectFit: "contain",
      "&:hover": {
        cursor: 'pointer',
      }
    }
  }));  

export default NavBar
