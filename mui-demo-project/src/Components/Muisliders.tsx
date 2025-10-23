import React, { Component } from 'react';
import { Box, Slider } from '@mui/material';

export default class Muisliders extends Component {
  state = {
    value: [20, 37]
  }

  handleChange = (_event: Event, newValue: number | number[]) => {
    this.setState({ value: newValue as number[] });
  }

  render() {
    return (
      <Box>
        <Slider
          value={this.state.value}
          onChange={this.handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  }
}
