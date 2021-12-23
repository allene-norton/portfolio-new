import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


import NavMenu from './NavMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },
    button: {
        backgroundColor: 'inherit',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'inherit',
        },
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },
    transparent: {
        backgroundColor: '#fff',
    }
}));

const Nav = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static"  >
                <Toolbar >
                    <NavMenu />
                    <Button
                        className={classes.button} >
                        Home
                    </Button>
                    <Button
                        className={classes.button} >
                        About
                    </Button>
                    <Button
                        className={classes.button} >
                        Portfolio
                    </Button>
                    <Button
                        className={classes.button} >
                        Resume
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Nav;