import React, { Component } from 'react'
import {Box,Stack,Grid,Divider, Paper} from '@mui/material';

export default class Muilayout extends Component {
  render() {
    return (

      <Paper elevation={10} sx={{padding:'32px'}}>
        <Stack sx={{border:'1px solid'}} direction='row' 
        divider={<Divider orientation='vertical' />}>
      <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'100px',
        width:'100px',
        padding:'16px',
        '&:hover':{
            backgroundColor:'primary.light',
        }

      }}>
        Box Component
      </Box>
      <Box 
      display="flex"
      height='100px'
      width='100px' 
      bgcolor='success.light'
      p={2}
        >
      </Box>
      
      <Grid container my={4}>
        <Grid > 
            <Box bgcolor='warning.light'p={2}>1</Box>
        </Grid>
        <Grid > 
            <Box bgcolor='warning.light'p={2}>2</Box>
        </Grid>
        <Grid > 
            <Box bgcolor='warning.light'p={2}>3</Box>
        </Grid>
        <Grid > 
            <Box bgcolor='warning.light'p={2}>4</Box>
        </Grid>
        
      </Grid>
      </Stack>
      </Paper>
    )
  }
}
