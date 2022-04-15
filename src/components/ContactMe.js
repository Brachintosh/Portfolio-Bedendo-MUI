import React from 'react'
import { makeStyles, Typography} from "@material-ui/core";

const ContactMe = ({ title, dark, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id} >
          <Typography className={classes.title} variant="h3" >*<u>{title}:</u></Typography>
      </div>
    </div>
  )
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      minHeight:"100vh",
      background: 'rgb(255, 248, 220)',
      color: "#A0522D",
    },
    title:{
      [theme.breakpoints.down('sm', 'm')]:{
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.8rem',
      },
      fontFamily: 'Modak',
      textShadow: "1px .6px #361500",
      letterSpacing: "1.85px",
      },
    sectionDark:{
      background: "#361500",
      color: 'rgb(255, 248, 220)',
    },
    sectionContent: {
      maxWidth: "85vw",
      margin: "0 auto",
      paddingTop: 9,
    },
  }));

export default ContactMe
