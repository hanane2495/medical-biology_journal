import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//components
import Numero from './Numero'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop:'5%',
    paddingBottom:'5%',
  },
  heading: {
    fontSize: theme.typography.pxToRem('1em'),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Archive() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel  style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Numéros 2021</Typography>
          <Typography className={classes.secondaryHeading}>description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Numéros 2020</Typography>
          <Typography className={classes.secondaryHeading}>description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}