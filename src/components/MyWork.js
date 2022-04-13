import React from 'react'
import { makeStyles } from "@material-ui/core";

const MyWork = ({ dark, title, id }) => {

const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        My Work
    </div>
  )
};


// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      minHeight:"100vh",
    },
    sectionDark:{
        background: "#361500",
        color: "#FFF",
    }
  }));


export default MyWork
