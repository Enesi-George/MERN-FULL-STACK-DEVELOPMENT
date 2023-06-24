import * as React from 'react';
import '../../../App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';




export default function FashionList() {
  return (
    <TableContainer 
    component={Paper} 
    sx={{
      position:"absolute",
      boxShadow:'1px 1px 2px grey',
      height: "100%",
      weight: '100%'
    }}>
      <Table aria-label="simple table" >
        <TableHead> 
          <TableRow>
            <TableCell>MEN'S FASHION</TableCell>
            <TableCell align="left">WOMEN'S FASHION</TableCell>
            <TableCell align="left">KID'S FASHION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  sx={{ 
          '&:last-child td, &:last-child th': {border: 0},
          '&:last-child a':{
            textDecoration:'none',
            color: 'black',
          },
          '&:last-child a:hover':{
            fontSize:'18px',
            fontWeight: 'bold'
          },
          }}>
        
            <TableRow>
              <TableCell component="th" scope="row"> 
                <Link to="#">Clothing </Link>
              </TableCell>
              <TableCell component="th" scope="row"> 
                <Link to="#"> Jewries </Link>
             </TableCell>
              <TableCell component="th" scope="row"> 
               <Link to="#"> Boy's Fashion </Link>
              </TableCell>
            </TableRow>
              <TableRow>
              <TableCell component="th" scope="row"> 
               <Link to="#">Watches </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to="#">Clothing </Link>
              </TableCell>
              <TableCell component="th" scope="row"> 
                <Link to="#">Girl's Fashion </Link>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell component="th" scope="row"> 
                <Link to="#">Shoes </Link>
              </TableCell>
              <TableCell component="th" scope="row"> 
               <Link to="#">Watches </Link>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell component="th" scope="row"> 
                <Link to="#">Underwears </Link>
              </TableCell>
              <TableCell component="th" scope="row"> 
                <Link to="#">Shoes </Link>
              </TableCell>

            </TableRow>
            
            <TableRow>
              <TableCell component="th" scope="row"> 
                <Link to="#">Jewries </Link>
              </TableCell>
              <TableCell component="th" scope="row"> 
              <Link to="#">Undies </Link>
              </TableCell>
              <TableCell component="th" scope="row">  </TableCell>
            </TableRow>           
        </TableBody>
      </Table>
    </TableContainer>
  );
}