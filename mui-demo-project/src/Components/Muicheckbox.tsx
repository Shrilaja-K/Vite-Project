import React, { Component } from 'react'
import {Box,FormControlLabel,Checkbox} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default class Muicheckbox extends Component {
    state={
        acceptTnc:false
    };

     handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({acceptTnc:event.target.checked});
    }
    
  render() {
    const {acceptTnc}=this.state;
    console.log({acceptTnc});
    return (
    <Box>
    <Box>
        <FormControlLabel label="I agree to terms and conditions" 
        control={<Checkbox checked={acceptTnc} onChange={this.handleChange}/>} />
    </Box>
    <Checkbox 
    icon={<BookmarkBorderIcon />} 
    checkedIcon={<BookmarkIcon />} 
    checked={acceptTnc} 
    onChange={this.handleChange}
    />

    </Box>
    )
  }
}
