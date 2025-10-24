import React, { Component } from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'

export default class Muitable extends Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Department</TableCell>
                    <TableCell>Staff Count</TableCell>
                    <TableCell>Student Count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    TableData.map(row=>(
                        <TableRow key={row.department}>
                            <TableCell>{row.department}</TableCell>
                            <TableCell>{row.staff_count}</TableCell>
                            <TableCell>{row.stu_count}</TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
const TableData=[ {
  
  "department": "CSE",
  "staff_count": 30,
  "stu_count": 200,

}, {
  "department": "IT",
  "staff_count": 30,
  "stu_count": 200,
 
}, {
  "department": "ECE",
  "staff_count": 30,
  "stu_count": 200,

}, ]

