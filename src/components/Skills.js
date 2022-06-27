import React from 'react'
import { makeStyles, Typography, Paper, Link, Divider } from "@material-ui/core";
import TimeLine from './TimeLine';
import codingIcon from '../images/binary-code1.png';
import henryCertificate from '../images/c-h-a4.png';
import noCountry form '../images/NoCountry-BRIAN BEDENDO.jpeg';

const Skills = ({ dark, title, id }) => {
  
  const classes = useStyles();
  const codeBinIcon = <img src={codingIcon} alt='img-not-found' style={{display:'flex', height:'3rem', width:'3rem', paddingRight:'1rem',   }}/>;
  const certificateLink = "https://certificates.soyhenry.com/cert?id=7fa9d673-0db5-48bd-98fb-0adb834ba72d";

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id} >
        <Typography className={classes.title} variant="h3" >-{" "}{title}:</Typography><br/>

        <Paper  className={classes.certificateContainer}>

          <Link color="inherit" href={certificateLink} target="_blank" className={classes.certificateLink} >
            <img src={henryCertificate} alt='certificate.pdf' title='Certificate Bedendo'
              className={classes.certificateIMG}
            />  
          </Link><br/>
          
          <Link color="inherit" href={certificateLink} target="_blank" className={classes.certificateLink} >
            <img src={noCountry} alt='NoCounrty-certificate.pdf' title='No Counrty Certificate Bedendo'
              className={classes.certificateIMG}
            />  
          </Link><br/>

          <Typography variant="h6" className={classes.descriptionText} >
            <u style={{display:'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom:'2%', }} >
                      {codeBinIcon} Tech Skills:
            </u>
          </Typography> <Divider />
            
          <TimeLine /><br/>

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
      paddingBottom: theme.spacing(5),
    },
    title:{
      [theme.breakpoints.down('sm', 'md')]:{
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.75rem',
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
      maxWidth: "85vw",
      margin: "0 auto",
      paddingTop: theme.spacing(3),
    },
    
    certificateContainer: {
      [theme.breakpoints.down('sm')]:{
        padding: theme.spacing(2),
      },
      border: 'solid #D7A86E 2.8px',
      borderRadius: '12px',
      padding: theme.spacing(5),
      display:'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection:'column'
    },
    certificateIMG: {
      [theme.breakpoints.down('lg')]:{
        margin: theme.spacing(2),
      },
      [theme.breakpoints.down('xs')]:{
        margin: theme.spacing(0.75),
      },
      width: '75vw',
      height: 'auto',
      border:'solid black .7px',
    },
    
  }));


export default Skills
