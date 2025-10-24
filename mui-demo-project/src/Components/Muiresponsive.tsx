import React, { Component } from 'react'
import {Box} from '@mui/material'
import {styled} from '@mui/material'

const StyledBox=styled(Box)(({theme})=>({
    height:'250px',
    width:'250px',
    backgroundColor:theme.status.danger,
}))

export default class Muiresponsive extends Component {
  render() {
    return (
        <>
      <Box
      sx={{
        height:'300px',
        width:{
            xs:100,
            sm:200,
            md:300,
            lg:400,
            xl:500,
        },
        bgcolor:'secondary.light'
      }}
      >

      </Box>
      <StyledBox />
      </>
    )
  }
}
