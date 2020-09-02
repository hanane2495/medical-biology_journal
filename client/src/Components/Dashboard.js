import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Form} from 'react-bootstrap';
import styled from 'styled-components'



//components
import Numero from './Numero'

const Styles = styled.div`
.big_title{
    color: rgba(63,63,179,1);
    font-weight:700;
    font-size:1em;
    &:after{
        content:"";
         background: rgba(63,63,179,1);
         display:block;
         height:3px;
         width:170px;
         margin: 5px 1px 20px; 
         
    }
    @media only screen and (max-width: 790px) {
       margin:5% 0;
    }
    @media only screen and (max-width: 320px) {
        margin:5% 0;
    }
}
`;

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
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Dashboard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <Styles>
    <Form>
        <Form.Check 
            type="switch"
            id="custom-switch"
            label="Author and reviewer"
        />
    </Form>
    <div className={classes.root}>
    <p className='big_title'>New Submissions</p>
      <ExpansionPanel  style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<button style={{background:'#cd4339', color:'#fff', border:'none', borderRadius:'5px'}}>Go</button>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Submit New Manuscript</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Submission sent back to author(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Incomplete submissions(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Submissions waiting for author's approval(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Submissions Being processed(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    <div className={classes.root}>
    <p className='big_title'>Revisions</p>
      <ExpansionPanel  style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Submissions needing revision(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Revisions sent back to author(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Revisions waiting for author's approval(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Revision being processed(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Declined revisions(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    <div className={classes.root}>
    <p className='big_title'>Completed</p>
      <ExpansionPanel  style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Submisions with a Decision(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
    <div className={classes.root}>
    <p className='big_title'>Reviewer Assignments</p>
      <ExpansionPanel  style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>New reviewer invitations(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Pending assignments(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}} expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Completed assignments(0)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Numero/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </Styles>
  );
}