import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
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
          <Typography variant="h6" component="div" className={classes.nameStyle}>
            <img src={logo} className={classes.logo} alt="No-connection" />
            Brian Bedendo
          </Typography>
        </Toolbar>
    </AppBar>
  )
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    offset: theme.mixins.toolbar,
    nameStyle: {
        flexGrow: 1,
        display: 'flex',
        alignContent: 'center',
        color:'#A0522D',
        transition: 'all ease-in-out .7s',
        textShadow: ".8px .65px #FCFF53",
        "&:hover, &.Mui-focusVisible": {
            transition: 'all ease-in-out 0.6s',
            color: "#FF5353",
            textShadow: ".8px .65px  #A0522D",
        },
    },
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
      marginRight: '0.5em',
      height: "2rem",
      width: "2rem",
      objectFit: "contain",
      "&:hover": {
        cursor: 'pointer',
      }
    }
  }));  

export default NavBar
