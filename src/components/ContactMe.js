import React, { useState } from 'react'
import { makeStyles, Divider, Paper, Radio, TextField, Typography, Button } from "@material-ui/core";

const ContactMe = ({ title, dark, id }) => {

  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id} >
          <Typography className={classes.title} variant="h3"  >-{" "}{title}:</Typography>

          <Paper className={classes.paperContact}>
            
            <div className={classes.titleCheckbox}>
              <Typography variant='h4' > Contact Me </Typography> <Divider />
              <div className={classes.choices} >
                <span>Say Hello!</span>
                <Radio 
                className={classes.radioBtn}
                value="Say Hi"
                checked={value === "Say Hi"}
                color='primary'
                onChange={handleChange}
                />

                <span>Get a Quote</span>
                <Radio 
                value="Get a Quote"
                checked={value === "Get a Quote"}
                color='primary'
                onChange={handleChange}
                />
              </div>
            </div>

            <form className={classes.form} noValidate autoComplete='off' >
              <TextField label="Your name..." className={classes.textFields} />
              <TextField label="Your e-mail..." className={classes.textFields} />
              
              {
                value === "Get a Quote" ? (
                  <>
                    <TextField label="Needed services" className={classes.textFields} />
                    <TextField label="Estimated budget" className={classes.textFields} />
                  </>
                ) : null
              }

              <TextField label="Write a message..." className={classes.textFields} />
            </form>

            <Button variant='contained' className={classes.btnSubmit} >Submit</Button>

          </Paper>

      </div>
    </div>
  )
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      minHeight:"fit",
      background: 'rgb(255, 248, 220)',
      color: "#A0522D",
      paddingBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      [theme.breakpoints.down('sm', 'm')]:{
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.8rem',
      },
      fontFamily: 'Beau Rivage ',
      textShadow: "1.5px .8px #D7A86E",
      marginTop: theme.spacing(2),
      fontWeight: 600,
      letterSpacing: "2px",
      },
    sectionDark:{
      background: "#361500",
      color: 'rgb(255, 248, 220)',
    },
    sectionContent: {
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(1),
      },
      [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(1),
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: "85vw",
      margin: "0 auto",
      paddingTop: theme.spacing(1.3),
    },
    paperContact: {
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1.5),
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(1),
      },
      paddingTop: theme.spacing(.3),
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      maxWidth: "85vw",
      minHeight: theme.spacing(60),
      margin: theme.spacing(1.5),
    },
    titleCheckbox: {
      [theme.breakpoints.down("sm")]: {
        width: "75vw",
        margin: theme.spacing(1.3),
      },
      width: "70vw",
      margin: theme.spacing(3),
    },
    choices: {
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1, 2),
      },
      margin: theme.spacing(2, 4),
    },
    radioBtn: {
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(3),
      },
      marginRight: theme.spacing(8),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textFields: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
        minWidth: "60vw",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3),
        minWidth: "50vw",
      },
      marginBottom: theme.spacing(4.5),
      minWidth: "45vw",
    },
    btnSubmit: {
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1.2, 4),
      fontWeight: 600,
      color: 'rgb(255, 248, 220)',
      textShadow: "1.5px .8px #795548",
      letterSpacing: "2px",
      backgroundColor: '#D7A86E',
      border: ' solid .8px rgb(255, 248, 220)',
      borderRadius: '12px',
      transition: 'all .45s',
      boxShadow: "2px 3px 4px 1px #795548",
      "& a": {
        textDecoration: 'none',
        color: 'rgb(255, 248, 220)',
        fontWeight: 700,
        textShadow: "1.5px .8px #795548",
        letterSpacing: "1.5px",
      },
      "&:hover":{
        color: '#795548',
        textShadow: "1.5px .8px #D7A86E",
        backgroundColor: 'rgb(255, 248, 220)',
        border: 'solid #D7A86E 2px',
        boxShadow: "2px 3px 4px 1px #795548",
      },
      "& a:hover": {
        transition: 'all .45s',
        textDecoration: 'none',
        textShadow: "1.5px .8px #D7A86E",
        color: "#795548",
        fontWeight: 700,
        letterSpacing: "1.5px",
      },
    },

  }));

export default ContactMe
