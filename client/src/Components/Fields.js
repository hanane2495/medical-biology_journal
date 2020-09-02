import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import { Link } from 'react-router-dom';


const Styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.9),
    },
  },
  label:{
    color:'#000',
  }
}));

export default function fields() {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <Chip 
        variant="outlined" 
        color='primary'
        label="Cellular biology"
        component="a"
        href="/Login"
        clickable
        />
        <Chip 
        variant="outlined" 
        label="Molecular biology"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
        <Chip 
        variant="outlined" 
        label="Microbiology"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
        <Chip 
        variant="outlined" 
        label="Structural biochemistry"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
        <Chip 
        variant="outlined" 
        label="Metabolic biochemistry"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
        <Chip 
        variant="outlined" 
        label="Enzymology"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
         <Chip 
        variant="outlined" 
        label="Hematology"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
         <Chip 
        variant="outlined" 
        label="Immunology"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
        <Chip 
        variant="outlined" 
        label="Genetic"
        color='primary'
        component="a"
        href="/Login"
        clickable
        />
      
    </div>
  );
}

/** 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
*/