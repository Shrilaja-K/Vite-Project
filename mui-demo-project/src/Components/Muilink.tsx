import React, { Component } from 'react'
import {Stack,Link} from '@mui/material'

export default class Muilink extends Component {
  render() {
    return (
      <Stack spacing={2}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary' underline='hover'>Secondary Link</Link>
      </Stack>
    )
  }
}
