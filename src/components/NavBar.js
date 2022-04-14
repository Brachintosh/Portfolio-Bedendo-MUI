import { 
  AppBar, makeStyles, Toolbar, Typography, List, IconButton, Drawer, Divider, ListItem, ListItemIcon, 
      } from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../images/coding1a.png";
import { Link, animateScroll as scroll } from "react-scroll";
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
// import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import MenuIcon from  '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

const linksNav = [
    {
        id: 'about',
        text: 'About',
        icon: <InfoTwoToneIcon fontSize='large' />,
    },
    {
        id: 'skills',
        text: 'Skills',
        icon: <EmojiObjectsTwoToneIcon fontSize='large' />,
    },
    {
        id: 'work',
        text: 'My Works',
        icon: <BuildTwoToneIcon fontSize='large' />,
    },
    {
        id: 'contact',
        text: 'Get in touch',
        icon: <ContactMailTwoToneIcon fontSize='large' />,
    },
]

const NavBar = () => {

const classes = useStyles();

const [open, setOpen] = useState(false);

  return (
  <>
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
          {/* HAMB.MENU */}
          <IconButton  edge='end' className={classes.menuButton} onClick={() => setOpen(!open) } >
            <MenuIcon  fonstSize='large' />
          </IconButton>
          
        </Toolbar>
    </AppBar>

  <div className={classes.drawer} >
    <Drawer anchor="right" open={open} onClose={() => setOpen(false) } >
      {/* EXIT.ICON */}
      <IconButton className={classes.menuDrawer} onClick={() => setOpen(false)}  >
        <CancelIcon />
      </IconButton>
      <Divider />

      {
        linksNav?.map(({ id, text, icon }, index)=> (
          <Link className={classes.linksDrawer}
            key={index} to={id} spy={true} activeClass="active" smooth={true} duration={750} offset={-60}
            onClick={() => setOpen(!open)} >
            
            <ListItem component='h4' >
              <span>
                <ListItemIcon >
                  {icon}
                </ListItemIcon>
              </span>{text}
            </ListItem>
          </Link>
        ))
      }
      
    </Drawer>
  </div>
  </>
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
              color: "tomato",
              textShadow: ".8px .65px  #A0522D",
              borderBottom: "2.5px solid tomato",
              marginTop: "2.5px",
          },
      },
    },
    menuButton: {
      display:'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        position: 'absolute',
        color: '#A0522D',
        top: 8,
        right: 20,
      }
    },
    drawer: {
      backgroundColor: '#FCFF53',
    },
    linksDrawer: {
      [theme.breakpoints.down("sm")]:{
        width: '58vw',
        margin: theme.spacing(2.7, 3.3, 0, 0),
      },
      width: '30vw',
      // Icons style:
      "& h4": {
        margin: theme.spacing(8, 0, 0, 4),
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: '#A0522D',
        textShadow: "1px .6px #FCFF53",
      },
      "& h4:hover, &.Mui-focusVisible": {
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all ease 0.3s',
        color: "tomato",
        textShadow: "1px .7px  #A0522D",
        borderBottom: "2.5px solid tomato",
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
