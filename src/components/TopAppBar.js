import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
    const classes = useStyles();
    console.log(window.location)
    let heading = window.location.pathname === "/"
        ? "Home"
        :  window.location.pathname === "/friends"
            ? "Friends"
            : window.location.pathname === "/contact"
                ? "Contact"
                : "Home";
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {heading}
                    </Typography>
                    <IconButton color="inherit">
                        <AccountCircle fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
