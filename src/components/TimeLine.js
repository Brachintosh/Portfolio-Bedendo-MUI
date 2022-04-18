import React from 'react';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import { makeStyles, Paper, Typography } from '@material-ui/core';
// ICONS  //
import figmaIcon from '../images/icons8-figma2.svg';
import nodeJsIcon from '../images/nodeJS-icon2.png';
import expressIcon from '../images/expresIcon.png';
import sequelizeIcon from '../images/sequelizeIcon.png';
import htmlIcon from '../images/icons8-html-5.svg';
import cssIcon from '../images/icons8-css3.svg';
import jsIcon from '../images/icons8-javascript2.svg';
import reactIcon from '../images/icons8-react.svg';
import reduxIcon from '../images/icons8-redux.svg';
import tailwindIcon from '../images/Tailwind_CSS_Logo.svg.png';
import mUI_Icon from '../images/material-ui-logo1.png';
import postgreIcon from '../images/icons8-postgresql.svg';
import postmanIcon from '../images/postmqnICON2.png';
import gitIcon from '../images/icons8-git.svg';
import githubIcon from '../images/icons8-github-144.png';
import scrumIcon from '../images/scrum2icon.png';

const TimeLine = () => {
  const classes = useStyles()

  const techSkills = [
      {
        area: 'Design',
        src: figmaIcon,
        title: "Figma",
        stars: 3.5,
      },
      {
        area: 'Back-End',
        src: nodeJsIcon,
        title: "Node.js",
        stars: 3.5,
      },
      {
        src: expressIcon,
        title: "Express.js",
        stars: 3.5,
      },
      {
        src: sequelizeIcon,
        title: "Sequelize",
        stars: 3.5,
      },
      {
        area: 'Front-End',
        src: htmlIcon,
        title: "HTML 5",
        stars: 4.5,
      },
      {
        src: cssIcon,
        title: "CSS 3",
        stars: 4,
      },
      {
        src: jsIcon,
        title: "Javascript ES6",
        stars: 4,
      },
      {
        src: reactIcon,
        title: "React",
        stars: 4,
      },
      {  
        src: reduxIcon,
        title: "React Redux",
        stars: 3.5,
      }, 
      {  
        src: tailwindIcon,
        title: "Tailwind",
        stars: 3.5,
      }, 
      {  
        src: mUI_Icon,
        title: "Material UI",
        stars: 4,
      }, 
      {
        area: 'Data-Base',
        src: postgreIcon,
        title: "Postgres SQL",
        stars: 4,
      },
      {
        src: postmanIcon,
        title: "Postman",
        stars: 4,
      },
      {
        area: 'Networking',
        src: gitIcon,
        title: "Git",
        stars: 4,
      },
      {
        src: githubIcon,
        title: "GitHub",
        stars: 4,
      },
      {
        src: scrumIcon,
        title: "SCRUM",
        stars: 3.5,
      },
  ];

  return (
    <Timeline position='right' >

      {
        techSkills?.map(({ area, src, title, stars }, index) =>(
          <TimelineItem key={index} >
            
            <TimelineOppositeContent>
              <Typography variant='subtitle' color='inherit' >
                {area}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator >
              <TimelineDot >
                <img src={src} alt={title} className={classes.customLogo} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={3} className={classes.paper} >
                {title}
              </Paper>
            </TimelineContent>


          </TimelineItem>
        ))
      }
    </Timeline>
  )
};

const useStyles = makeStyles((theme) =>({

  customLogo:{
      [theme.breakpoints.down('xs')]: {
        width:"1.5rem",
        height: 'fit'
      },
      [theme.breakpoints.down('sm')]: {
        width:"2rem",
        height: 'fit'
      },
        width:"3.3rem",
        height: 'fit',

    },
    paper:{
      [theme.breakpoints.down('sm')]: {
        margin:theme.spacing(2, -.5),
        maxWidth:"20vw",
      },
        padding:theme.spacing(2.5, 2.5),
        margin:theme.spacing(4, -1.75),
        maxWidth:"10vw",
    }
  }
));

export default TimeLine
