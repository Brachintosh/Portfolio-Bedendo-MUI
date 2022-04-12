import React from 'react'
import { makeStyles } from "@material-ui/core";

const Skills = ({ dark, title, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        Skills
    </div>
  )
};


// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      minHeight:"100vh",
      background: 'rgb(255, 248, 220)'
    },
    sectionDark:{
        background: "#343434",
        color: "#FFF",
    }
  }));


export default Skills
