import React, { Component } from 'react'
import {Box,Grid} from '@mui/material';

export default class Muilayout extends Component {
  render() {
    return (
        <>
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
      <Grid container>
        <Grid item> 
            <Box 
            bgcolor='warning.light'
            p={2}
            >
                Item 1
            </Box>
        </Grid>
        <Grid item>
        <Box 
            bgcolor='warning.light'
            p={2}
            >
                Item 2
            </Box>                                          
        </Grid>
        <Grid item>
        <Box 
            bgcolor='warning.light'
            p={2}
            >
                Item 3
            </Box>
        </Grid>
        <Grid item>
        <Box 
            bgcolor='warning.light'
            p={2}
            >
                Item 4
            </Box>
        </Grid>
        <Grid item>
        <Box 
            bgcolor='warning.light'
            p={2}
            >
                Item 5
            </Box>
        </Grid>
      </Grid>
      </>
    )
  }
}
