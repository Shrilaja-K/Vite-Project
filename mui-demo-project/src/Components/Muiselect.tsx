import React, { Component } from 'react'
import {Box,TextField,MenuItem} from '@mui/material';

export default class Muiselect extends Component {
    state={
        country:''
    }
    handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
            this.setState({country:event.target.value})
    }

  render() {
    const {country}=this.state;
    console.log({country});
    return (
    <Box>
      <TextField select label="Select Country" fullWidth value={country} onChange={this.handleChange}  >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>
    </Box>
    )
  }
}
