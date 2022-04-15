import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";

const MyWork = ({ dark, title, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        <div className={classes.sectionContent} id={id} >
          <Typography className={classes.fontTitle} variant="h3" >-{" "}{title}:</Typography>
        </div>
    </div>
  )
};


// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      minHeight:"100vh",
    },
    fontTitle:{
      [theme.breakpoints.down('sm', 'm')]:{
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.75rem',
      },
    fontFamily: 'Beau Rivage ',
    marginTop: theme.spacing(2),
    fontWeight: 600,
    textShadow: "1.5px .8px #D7A86E",
    letterSpacing: "2px",
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


export default MyWork
