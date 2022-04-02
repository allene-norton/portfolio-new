import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Scrollchor } from 'react-scrollchor';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


import NavMenu from './NavMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        backgroundColor: 'inherit',
        color: '#fff',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'inherit',
        },
        //flexGrow: 1,

    },
    transparent: {
        backgroundColor: '#fff',
    },
    sticky: {
        position: 'fixed',
        backgroundColor: 'transparent',
    },
    identifier: {
        marginRight: theme.spacing(4),
        color: '#00b19b'
    },
    noline: {
        textDecoration: 'none'
    }
}));

const Nav = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} className={classes.sticky}>
                <Toolbar >
                    <Typography className={classes.identifier} variant='button' >Allene Norton</Typography>
                    <Scrollchor to='#home' className={classes.noline}>
                        <Button
                            className={classes.button} >
                            Home
                        </Button>
                    </Scrollchor>
                    <Scrollchor to='#about' className={classes.noline}>
                        <Button
                            className={classes.button} >
                            Skills + Tech
                        </Button>
                    </Scrollchor>
                    <Scrollchor to='#portfolio' className={classes.noline}>
                        <Button
                            className={classes.button} >
                            Portfolio
                        </Button>
                    </Scrollchor>
                    {/* <Scrollchor to='#resume' className={classes.noline}>
                        <Button
                            className={classes.button} >
                            Resume
                        </Button>
                    </Scrollchor> */}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Nav;