import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";

const Skills = ({ dark, title, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id} >
        <Typography variant="h3" >{title}:</Typography>
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


export default Skills
