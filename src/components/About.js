import React from 'react'
import { makeStyles } from "@material-ui/core";

const About = ({ title, dark, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        About Page
    </div>
  )
}

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      minHeight:"100vh",
    },
    sectionDark:{
        background: "#343434",
        color: "#FFF",
    }
  }))

export default About
