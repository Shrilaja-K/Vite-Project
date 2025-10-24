import React, { Component } from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'

export default class Muitable extends Component {
  render() {
    return (
      <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    TableData.map(row=>(
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
const TableData=[{
  "id": 1,
  "first_name": "Nil",
  "last_name": "D'Abbot-Doyle",
  "email": "ndabbotdoyle0@elegantthemes.com",
  
}, {
  "id": 2,
  "first_name": "Henriette",
  "last_name": "Whetnall",
  "email": "hwhetnall1@smh.com.au",

}, {
  "id": 3,
  "first_name": "Boy",
  "last_name": "Rosenshine",
  "email": "brosenshine2@bluehost.com",
 
}, {
  "id": 4,
  "first_name": "Rachael",
  "last_name": "Babar",
  "email": "rbabar3@bluehost.com",

}, {
  "id": 5,
  "first_name": "Louisette",
  "last_name": "Rosensaft",
  "email": "lrosensaft4@shinystat.com",

}, {
  "id": 6,
  "first_name": "Ash",
  "last_name": "Sperski",
  "email": "asperski5@columbia.edu",
  
}, {
  "id": 7,
  "first_name": "Crichton",
  "last_name": "Thurnham",
  "email": "cthurnham6@mediafire.com",
  
}, {
  "id": 8,
  "first_name": "Hobard",
  "last_name": "Kacheller",
  "email": "hkacheller7@ehow.com",
 
}, {
  "id": 9,
  "first_name": "Kirk",
  "last_name": "Ridd",
  "email": "kridd8@linkedin.com",
 
}, {
  "id": 10,
  "first_name": "Eveline",
  "last_name": "Senechault",
  "email": "esenechault9@wordpress.org",
  
}]

