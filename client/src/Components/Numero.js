import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


//icon
import { FaFileDownload } from "react-icons/fa";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Issue, Vol, Date) {
  return { Issue, Vol, Date };
}

const rows = [
  createData('05', 159, '03/12'),
  createData('04', 237, '24/10'),
  createData('03', 262, '03/07'),
  createData('02', 305, '24/05'),
  createData('01', 356, '02/02'),
];

export default function Numero() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  style={{fontWeight:'bold'}}>Issue</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Vol</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Date</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}></TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Issue}
              </TableCell>
              <TableCell align="right">{row.Vol}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="center">
                  <button 
                    type='submit' 
                    style={{
                            background:'rgba(63,63,179,1)',
                            color:'whitesmoke',
                            border:'none',
                            fontWeight:'bold',
                            marginLeft: '20px',
                            width:'80px',
                            height:'30px',
                            borderRadius :'5px'
                    }}
                    >
                    Visit
                </button>
              </TableCell>
              <TableCell align="center">
                  <Link to='#'>
                    <FaFileDownload 
                     style={{
                        width:'30px',
                        height:'30px'
                       }}             
                    />
                  </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}