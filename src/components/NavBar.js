import { AppBar, makeStyles, Toolbar, Typography, List } from '@material-ui/core';
import React from 'react';
import logo from "../images/coding1a.png";
import { Link, animateScroll as scroll } from "react-scroll";
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
//  InfoOutlinedIcon, InfoTwoTone, 


const linksNav = [
    {
        id: 'about',
        text: 'About',
        icon: <InfoTwoToneIcon />,
    },
    {
        id: 'skills',
        text: 'Skills',
        icon: <EmojiObjectsTwoToneIcon />,
    },
    {
        id: 'work',
        text: 'My Works',
        icon: <BuildTwoToneIcon />,
    },
    {
        id: 'contact',
        text: 'Get in touch',
        icon: <ContactMailTwoToneIcon />,
    },
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

          <List className={classes.menu}>
            {
              linksNav?.map(({ id, text }, index)=> (
                <Link className={classes.linksNav}
                 key={index} to={id} spy={true} activeClass="active" smooth={true} duration={750} offset={-60}
                >
                  {text}
                </Link>
              ))
            }
          </List>
          
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
        fontWeight: 'bold',
        display: 'flex',
        alignContent: 'center',
        color:'#A0522D',
        transition: 'all ease-in-out .7s',
        textShadow: ".6px .5px #FCFF53",
        "&:hover, &.Mui-focusVisible": {
            transition: 'all ease 0.6s',
            color: "#FF5353",
            fontWeight: 'bold',
            textShadow: ".8px .65px  #A0522D",
        },
    },
    menu: {
      // Pantallas chicas:
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      flexGrow: 0.15,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'space-evenly',
      // Links: [[ anchor ]]
      "& a": {
          color:'#A0522D',
          fontWeight: 'bold',
          transition: 'all ease-in-out .7s',
          textShadow: ".6px .5px #FCFF53",
          "&:hover, &.Mui-focusVisible": {
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all ease 0.6s',
              color: "#FF5353",
              textShadow: ".8px .65px  #A0522D",
          },
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
