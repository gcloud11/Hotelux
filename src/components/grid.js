import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function FullWidthGrid({title, fetchURL}) {

  const classes = useStyles();

  const [listings, setListings] = useState([]);

  useEffect( () => {
    async function fetchData() {
      
    }
  })

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
        </Grid>
    </div>
  );
}