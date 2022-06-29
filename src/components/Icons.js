import { makeStyles, Paper, Typography, Grid  } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
// ICONS  //
import canva from '../images/canva.png';
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

const Icons = () => {
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


    console.log('SOY EL ARRAY techSkills :>> ', techSkills);
  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* DESIGN */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='subtitle' color='inherit' >
                {techSkills[0].area}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
                <img src={canva} alt={canva} title={canva} className={classes.customLogo} />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
                <img src={techSkills[0].src} alt={techSkills[0].title} title={techSkills[0].title} className={classes.customLogo} />
          </Paper>
        </Grid>

        {/* BACK END */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='subtitle' color='inherit' >
                {techSkills[1].area}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6} >
          <Paper className={classes.paper}>
            <div className={classes.customLogoALT} >

            <img src={techSkills[1].src} alt={techSkills[1].title} title={techSkills[1].title} className={classes.customLogo} />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={techSkills[2].src} alt={techSkills[2].title} title={techSkills[2].title} className={classes.customLogo} />
          </Paper>
        </Grid>

        {/* FRONT END */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='subtitle' color='inherit' >
                {techSkills[4].area}
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='subtitle' color='inherit' >
                Design 3
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography variant='subtitle' color='inherit' >
                Design 3
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography variant='subtitle' color='inherit' >
                Design 3
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography variant='subtitle' color='inherit' >
                Design 3
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        margin:theme.spacing(5, 2),
      },
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
      customLogoALT: {
        [theme.breakpoints.down('xs')]: {
            margin:  theme.spacing(1),
          },
          [theme.breakpoints.down('sm')]: {
            margin:  theme.spacing(1),
          },
        margin:  theme.spacing(2.35),
      },
      paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(-.8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: ".6px .5px 5px .7px  #343434",
      },
      paper2:{
        [theme.breakpoints.down('sm')]: {
          margin:theme.spacing(2, -.5),
          maxWidth:"20vw",
        },
          padding:theme.spacing(2.5, 2.5),
          margin:theme.spacing(4, -.25),
          textAlign: 'center',
          maxWidth:"10vw",
      }
    }
  ));

export default Icons;