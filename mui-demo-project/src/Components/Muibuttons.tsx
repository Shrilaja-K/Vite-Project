import React, { Component } from 'react'
import { Stack,Button, IconButton, ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default class Muibuttons extends Component {
  render() {
    return (
        <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text Button</Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button> 
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="error">Error</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
      </Stack>
      <Stack display='block' spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
    </Stack>
    <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>Send</Button>
        <Button variant="contained" endIcon={<SendIcon />}  >Send</Button>   
    </Stack>
    <IconButton aria-label="send" color="success" size="small"> 
        <SendIcon />
      </IconButton>
      <ButtonGroup orientation='vertical' size='small' color='secondary' variant="outlined">
        <Button onClick={()=>alert("Left clicked")}>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>
      
      </Stack>
    )
  }
}
