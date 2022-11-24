import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {
   makeStyles, Typography, Card, CardActions, CardContent, Box, Button
  } from "@material-ui/core";
import author from '../images/brachintosh-Img.jpg';
import resumeBedendo from '../images/Bedendo resume.pdf';
import blocksIcon from  '../images/blocks1.png';
import downloadIcon from '../images/download-icon1.png';

const About = ({ title, dark, id }) => {

const classes = useStyles();
const blocks = <img src={blocksIcon} alt='img-not-found' style={{display:'flex', height:'3rem', width:'3rem', paddingRight:'1rem',   }}/>
// const codeBinIcon = <img src={codingIcon} alt='img-not-found' style={{display:'flex', height:'3rem', width:'3rem', paddingRight:'1rem',   }}/>;

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        <div className={classes.sectionContent} id={id} >
          <Typography className={classes.fontTitle}  variant="h3" >-{" "}{title}:</Typography>
      
          <Card className={classes.cardContainer} >
            <Box className={classes.boxImg} >
              <img src={author} title="brachintosh" className={classes.imgAuthor} alt='author-brachintosh' />
            </Box>

            <CardContent className={classes.cardContent} >
              <TypeWriterEffect  
                text="Hi, I'm Brian Ezequiel Bedendo."
                textStyle={{
                  fontSize:'1.6rem',
                  fontWeight: 600,
                  color: '#795548',
                }}
                cursorColor='#EEEEEE'
                startDelay={200}
                typeSpeed={100}               
              /><br/>

            {/* MULTI-TEXT TYPE-WRITER */}
              <TypeWriterEffect
                      textStyle={{
                        // color: '#3F3D56',
                        color:'#795548',
                        fontWeight: 500,
                        fontSize: '1.4em',
                      }}
                      startDelay={3650}
                      cursorColor="#EEEEEE"
                      multiText={[
                        '- Enthusiastic Dev.',
                        '- SCRUM Methodologies.',
                        '- Knack of building applications.',
                        '- React/React Native Dev.',
                        '- Full Stack Developer. ',
                      ]}
                      multiTextDelay={1400}
                      typeSpeed={100}
                      loop={true}
              /><br/>


              <Typography variant="h6" className={classes.descriptionText} >
                <u style={{display:'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom:'2%', }} >
                  {blocks} About Me:
                </u>
                  <span style={{display:'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom:'2%', }} >
                    {"   "}I consider myself a curious person, who like to find answers by his own means, a student with an unquenchable thirst for knowledge. <br/>
                    {/* <img src={rocketIcon} alt='img-not-found' style={{display:'flex', height:'4rem', width:'4rem',  }}/>{"   "} */}
                  </span>

                  <span style={{display:'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingBottom:'2%', }} >
                    {"   "}Decided and perseverant through every obstacle and challenge, with great team skills to be a good team player, but also critic and organized following up my tasks and duties.<br/><br/>
                  </span>

              </Typography>
              
            </CardContent>

            <CardActions>
              <Button className={classes.bntResume} variant='contained' size='large'>
                <img src={downloadIcon} alt='img-not-found' style={{display:'flex', height:'2rem', width:'2rem', marginRight:'0.75rem', }}/>
                <a href={resumeBedendo} download >
                  Get Resume
                </a>
              </Button>
            </CardActions>

          </Card>

        </div>
    </div>
  );
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      paddingTop: '0.5em',
      minHeight:"fit",
      paddingBottom: '3rem',
    },
    fontTitle:{
      [theme.breakpoints.down('sm', 'md')]:{
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.75rem',
      },
    fontFamily: 'Beau Rivage ',
    marginTop: theme.spacing(4),
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
      marginTop: 10,
    },
    cardContainer: {
      [theme.breakpoints.down('sm', 'xs',)]: {
        paddingBottom: theme.spacing(10),
      },
      display: 'flex',
      position: 'relative',
      marginTop: theme.spacing(2.5),
      backgroundColor: '#EEEEEE',
      border: 'solid #D7A86E 2.4px',
      borderRadius: '12px',
      boxShadow: "1.2px .8px 8px .7px #EEEEEE",
      width: '86vw',
      height: 'fit',
      paddingBottom: theme.spacing(20),
    },
    descriptionText: {
      [theme.breakpoints.down('xs',)]: {
        margin: theme.spacing(5),
        fontSize: '.9rem',
      },
      [theme.breakpoints.down('sm',)]: {
        margin: theme.spacing(6),
        fontSize: '1rem',
      },
      color: "#795548",
      textShadow: "1px .8px #D7A86E" ,
      fontWeight: 450,
    },
    boxImg: {
      [theme.breakpoints.down('sm', 'md')]:{
        display:'none',
        width: '0vw',
        height: '0vh', 
      },
      position: 'relative',
      width: '50vw',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    imgAuthor: {
      [theme.breakpoints.down('sm', 'md')]:{
        display: 'flex',
        justifyContent: 'start',
        width: '40vw',
        height: 'auto',
        alignSelf: 'center',
      },
      [theme.breakpoints.down('xs')]:{
        width: '30vw',
        height: 'auto',
      },
      margin: theme.spacing(0.8),
      height: 'auto',
      border: 'solid #D7A86E 1.2px',
      borderRadius: '50%',
      boxShadow: "4px 3px 10px 3px #BDBDBD",
    },
    cardContent: {
      [theme.breakpoints.down('sm')]:{
        width: '100vw',
        height: 'auto',
        marginLeft: theme.spacing(4),
      },
      [theme.breakpoints.down('xs')]:{
        width: '100vw',
        height: 'auto',
      },
      marginTop: theme.spacing(3),
    },
    bntResume: {
      [theme.breakpoints.down("sm")]: {
        bottom: 32,
        right: 40,
      },
      position: 'absolute',
      bottom: '3rem',
      right: '4rem',
      padding: theme.spacing(1.8),
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

export default About;
