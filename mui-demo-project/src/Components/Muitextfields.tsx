import React, { Component } from 'react'
import {Stack,TextField} from '@mui/material';

export default class Muitextfields extends Component {
  render() {
    return (
        <Stack spacing={4}>
          <Stack spacing={2} direction='row'>
            <TextField label="Name" variant='outlined'/>
            <TextField label="Name" variant='filled'/>
            <TextField label="Name" variant='standard'/>
          </Stack>
          <Stack spacing={2} direction='row'>
            <TextField label="Small secondary" size='small' color='secondary' variant='outlined'/>
            <TextField label="Small secondary" size='small' color='secondary' variant='filled'/>
            <TextField label="Small secondary" size='small' color='secondary' variant='standard'/>
          </Stack>
          <Stack spacing={2} direction='row'>
            <TextField label="Password" type='password' helperText='Do not share your password' variant='outlined'/>
            <TextField label="Password" type='password' helperText='Do not share your password' variant='filled'/>
            <TextField label="Password" type='password' helperText='Do not share your password' variant='standard'/>
          </Stack>
          <Stack spacing={2} direction='row'>
            <TextField label="Disabled" disabled variant='outlined'/>
            <TextField label="Disabled" disabled variant='filled'/>
            <TextField label="read only" slotProps={{htmlInput: {readOnly: true}}} variant='filled'/>
          </Stack>
         </Stack>
    )
  }
}
