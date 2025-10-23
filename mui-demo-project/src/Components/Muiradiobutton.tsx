import React, { Component } from 'react'
import {Box,FormLabel,FormControl,FormControlLabel,RadioGroup,Radio} from '@mui/material';

export default class Muiradiobutton extends Component {
    state={
        value:''
    }
    handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
            this.setState({value:event.target.value});
        }
        

  render() {
    const {value}=this.state;
    console.log({value});
    return (
    <Box>
      <FormControl>
        <FormLabel id='years'>Experience in Years</FormLabel>
        <RadioGroup aria-labelledby='years' name='years' value={value} row onChange={this.handleChange}>
          <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
          <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
          <FormControlLabel value="6-10" control={<Radio />} label="6-10" />
          <FormControlLabel value="10+" control={<Radio />} label="10+" />
        </RadioGroup>
      </FormControl>
    </Box>
    )
  }
}
