import React, { useState } from 'react'
import { Box, Link, makeStyles, Divider, Paper, Radio, TextField, Typography, Button } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Instagram from '@material-ui/icons/Instagram';
import emailJS from 'emailjs-com';
import swal from 'sweetalert2';
import mailIconPng from '../images/mail-post-60.png';

const ContactMe = ({ title, dark, id }) => {
  const mailIcon = <img src={mailIconPng} alt='img-not-found' style={{display:'flex', height:'3rem', width:'3rem', paddingRight:'1rem',   }}/>;

  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");

  const cLog = (e) => {
    console.log('Soy input >>> ', e.target.value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function sendEmail(e) { 
    e.preventDefault();

    emailJS.sendForm('service_mft0sgh', 'template_c8fgc9u', e.target, 'ZgFceUGRCxVnpxkqu')
      .then((result) => {
        swal.fire(
          'Good job!',
          'You have sent to an email brachintosh!',
          'success'
        )
      }, (error) => {
        swal.fire(
          'Upsss!',
          'Message failed!',
          'error'
        )
      });
    e.target.reset();
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id} >
          <Typography className={classes.title} variant="h3"  >-{" "}{title}:</Typography>

          <Paper className={classes.paperContact}>
            
            <Box className={classes.contactLinks} border='invisible' >
              <div className={classes.contactLinks} >
                <Link href='https://github.com/Brachintosh' target="_blank" rel="noopener noreferrer" >
                  <GitHubIcon className={classes.linked} />
                </Link>
              </div>
              <div className={classes.contactLinks} >
                <Link href='https://www.linkedin.com/in/brian-ezequiel-bedendo' target="_blank" rel="noopener noreferrer" >
                  <LinkedInIcon className={classes.linked}/>
                </Link>
              </div>
              <div className={classes.contactLinks} >
                <Link href='https://wa.me/541158261458' target="_blank" rel="noopener noreferrer" >
                  <WhatsAppIcon className={classes.linked}/>
                </Link>
              </div>
              <div className={classes.contactLinks} >
                <Link href='https://www.instagram.com/brachintosh/' target="_blank" rel="noopener noreferrer" >
                  <Instagram className={classes.linked}/>
                </Link>
              </div>
            </Box>

            <div className={classes.titleCheckbox}>

              <Typography variant="h6" >
                <u style={{display:'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom:'2%', }} >
                          {mailIcon} Contact Me:
                </u>
              </Typography> <Divider />
              
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

            <form className={classes.form} autoComplete='off' onSubmit={sendEmail} >
              <TextField label="Your name..." required className={classes.textFields} name='name' onChange={cLog} />
              <TextField label="Your e-mail..." required className={classes.textFields} name='email' onChange={cLog}/>
              
              {
                value === "Get a Quote" ? (
                  <>
                    <TextField label="Needed services" className={classes.textFields} name='services' onChange={cLog} />
                    <TextField label="Estimated budget" className={classes.textFields} name='budget' onChange={cLog} />
                  </>
                ) : null
              }

              <TextField multiline variant='outlined'fullWidth required label="Write a message..." className={classes.textFields}  name='message' onChange={cLog} />

            <Button 
              variant='contained'
              className={classes.btnSubmit} 
              type='submit'
              >Submit</Button>
            </form>

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
      minHeight: theme.spacing(65),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      boxShadow: "2px 2px 15px 2px #343434",
    },
    titleCheckbox: {
      [theme.breakpoints.down("sm")]: {
        width: "75vw",
        margin: theme.spacing(1.3, 5),
      },
      [theme.breakpoints.down("md")]: {
        width: "75vw",
        margin: theme.spacing(2, 3.5),
      },
      width: "70vw",
      margin: theme.spacing(.2, 10),
      "& h4":{
        marginBottom: theme.spacing(2),
       },
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
    contactLinks: {
      display: 'flex',
      flexDirection: 'row',
      justifyItems: 'space-around',
      alignItems: 'space-around',
      margin: theme.spacing(1.5),
    },
    linked: {
      minWidth: '2.5rem',
      minHeight: '2.5rem',
    },

  }));

export default ContactMe
