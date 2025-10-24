import React, { Component } from 'react'
import {Stack,Link} from '@mui/material'

export default class Muilink extends Component {
  render() {
    return (
      <Stack spacing={2}>
        <Link href='https://ieasonline.edupage.org/text5/' color='secondary' underline='hover'>Click Here for Rules and Regulations</Link>
      </Stack>
    )
  }
}