import React from 'react'
import { Box, Container, Typography, Link, makeStyles, Divider } from '@material-ui/core';
// color='rgb(255, 248, 220)' 

function Copyright() {
const classes = useStyles(); 

    return (
      <Typography variant="subtitle2" align="center">
        <Link color="inherit" href="https://www.linkedin.com/in/brian-ezequiel-bedendo/" target="_blank" className={classes.links} >
            <b> Brian E. Bedendo</b>
        </Link>{' - '}
        {'Copyright © '}
        {new Date().getFullYear()}
        {'. This Portfolio was styled using '}{' '}
        <Link color="inherit" href="https://mui.com/" target="_blank" className={classes.links} >
            <b>Material UI</b>
        </Link>{' ™️ and developed by '}
        <Link color="inherit" href="https://github.com/Brachintosh" target="_blank" className={classes.links} >
            <b>brachintosh</b>
        </Link>
      </Typography>
    );
  }

const FooterBrand = () => {
const classes = useStyles(); 

  return (
    <footer className={classes.footer} >
    
    <Box bgcolor="#CFD8DC" >
        <Container maxWidth='lg'>
            <Typography variant="subtitle2" align="center" className={classes.quote}>
                “The people who are crazy enough to think they can change the world are the ones who do."{'  -  '}
                <Link color="inherit" href="https://en.wikipedia.org/wiki/Steve_Jobs" target="_blank" className={classes.links} >
                    <b>🅂🅃🄴🅅🄴 🄹🄾🄱🅂</b>
                </Link>
            </Typography>
            <Divider className={classes.divider} />
            <Box  className={classes.box}>
                <Copyright />
            </Box>
        </Container>
    </Box>
    </footer>
  );
};


const useStyles = makeStyles((theme) => ({
    footer: {
        color:'#795548',
    },
    quote: {
        paddingTop: '0.5em',
    },
    divider: {
        margin: '0.5%',
    },
    box: {
        padding: '3px 0px 3px 0px',
    },
    links: {
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: "#00BCD4",
        },
    }
  }))

export default FooterBrand;
