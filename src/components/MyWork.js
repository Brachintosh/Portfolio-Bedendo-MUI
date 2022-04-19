import React from 'react'
import { Grid, makeStyles, Card, Paper, Typography, CardMedia, CardContent, Link, Divider } from "@material-ui/core";
import mockData from '../mockData';

const MyWork = ({ dark, title, id }) => {

const classes = useStyles();

console.log(mockData);

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        <div className={classes.sectionContent} id={id} >
          <Typography className={classes.fontTitle} variant="h3" >-{" "}{title}:</Typography>

          <Grid container className={classes.grid} >
            {
              mockData?.map(({ title, image, link, repo, yt, desc }, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
                  
                  <Card className={classes.cardContainer} >
                    
                    <CardMedia image={image} title={title} className={classes.cardMedia} />
                    
                    <CardContent>
                      <Link href={link} color='primary' target='_blank' rel="noopener noreferrer" />
                      <Typography variant="h6" className={classes.titleText} >
                          {title}
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" className={classes.descText} >
                          {desc}
                        </Typography>

                    </CardContent>

                  </Card>

                </Grid>
              ))
            }
          </Grid>

        </div>
    </div>
  )
};


// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    section:{
      [theme.breakpoints.down('sm', 'md')]:{
        paddingBottom: theme.spacing(2),
      },
      minHeight:"fit",
      paddingBottom: theme.spacing(5),
    },
    sectionDark:{
        background: "#361500",
        color: 'rgb(255, 248, 220)',
    },
    sectionContent: {
      [theme.breakpoints.down('sm', 'md')]:{
        paddingTop: theme.spacing(1),
      },
      maxWidth: "85vw",
      margin: "0 auto",
      paddingTop: theme.spacing(4),
    },
    fontTitle:{
      [theme.breakpoints.down('sm', 'md')]:{
        fontSize: '2.3rem',
        marginTop: theme.spacing(1.5),
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1.75rem',
      },
    fontFamily: 'Beau Rivage ',
    marginTop: theme.spacing(2),
    fontWeight: 600,
    textShadow: "1.5px .8px #D7A86E",
    letterSpacing: "2px",
    },
    grid: {
      [theme.breakpoints.down('sm', 'md')]:{
        marginTop: theme.spacing(1.5),
      },
      marginTop: theme.spacing(4)
    },
    cardContainer: {
      [theme.breakpoints.down('sm')]: {
        maxWidth: theme.spacing(50),
        minHeight: theme.spacing(40),
        margin: theme.spacing(1.3),
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: theme.spacing(50),
        minHeight: theme.spacing(45),
        margin: theme.spacing(1.5),
      },
      maxWidth: theme.spacing(45),
      minHeight: theme.spacing(50),
      margin: theme.spacing(2),
    },
    cardMedia: {
      height: 0,
      paddingTop: '56.25%' // img > 16:9
    },
    titleText: {
      margin: theme.spacing(.2),
      color: theme.palette.third.main,
    },
    descText: {
      padding: theme.spacing(1.5, 1.6),
    },

  }
  
));

export default MyWork;