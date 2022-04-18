import React from 'react'
import { Grid, makeStyles, Card, Paper, Typography, CardMedia, CardContent, Link } from "@material-ui/core";
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
                        {title}

                        <Typography variant="subtitle2" >
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
      minHeight:"fit",
      paddingBottom: theme.spacing(5),
    },
    sectionDark:{
        background: "#361500",
        color: 'rgb(255, 248, 220)',
    },
    sectionContent: {
      maxWidth: "85vw",
      margin: "0 auto",
      paddingTop: 9,
    },
    fontTitle:{
      [theme.breakpoints.down('sm', 'm')]:{
        fontSize: '2.3rem',
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
      marginTop: theme.spacing(4)
    },
    cardContainer: {
      [theme.breakpoints.down('sm')]: {
        maxWidth: theme.spacing(50),
        minHeight: theme.spacing(40),
        margin: theme.spacing(1.5),
      },
      maxWidth: theme.spacing(45),
      minHeight: theme.spacing(40),
      margin: theme.spacing(3),
    },
    cardMedia: {
      height: 0,
      paddingTop: '56.25%' // img > 16:9
    },
  }
));

export default MyWork;