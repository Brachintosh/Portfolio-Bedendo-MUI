import React, { useState, useEffect }from 'react';
import { makeStyles, IconButton, Box } from '@material-ui/core';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';


const ScrollToTop = ({
    showBelow
}) => {

const classes = useStyles();

const [show, setShow] = useState(showBelow ? false : true);

const handleScroll = () => {
    if(window.pageYOffset > showBelow) {
        if(!show) setShow(true)
    } else {
        if(show) setShow(false)
    }
};

const handleClick = () => {
    window[`scrollTo`]({top:0, behavior: `smooth` })
};

useEffect(() => {
    if(showBelow) {
        window.addEventListener(`scroll`, handleScroll)
        return () => window.removeEventListener(`scroll`, handleScroll)
    }
});

return (
        <Box direction="row" >
            {show &&
            <IconButton  item xs onClick={handleClick} className={classes.toTop} edge="end" size="medium">
                <ExpandLessOutlinedIcon fontSize="inherit"/>
            </IconButton>
            }
        </Box>
    );
};

// Material UI settings hook >> useStyles:
const useStyles = makeStyles((theme) =>({
    // ClassName:
    toTop: {
        [theme.breakpoints.down('sm')]: {
            bottom: '4.5em',
            right: '4.5%',
        },
        zIndex: 2,
        position: 'fixed',
        bottom: '3em',
        right: '6%',
        background: "#DCE775",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: "#424242",
        transition: '0.5s',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.53s',
            color: 'rgb(255, 248, 220)',
            backgroundColor: '#FF8E53',
            boxShadow: '0.9px 5px 6px 2.5px rgba(255, 105, 135, .3)',
        },   
    },
  }));  

export default ScrollToTop;
