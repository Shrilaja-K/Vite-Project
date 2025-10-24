import React, { Component } from 'react';
import { Box } from '@mui/material';


interface PropstyleProps {
  bgcolor?: string;
  size?: number;
  label?: string;
}

export default class Propstyle extends Component<PropstyleProps> {
  render() {
    const { bgcolor = 'primary.main', size = 100, label = 'Box' } = this.props;

    return (
      <Box
        sx={{
          width: size,
          height: size,
          bgcolor,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          fontWeight: 'bold',
        }}
      >
        {label}
      </Box>
    );
  }
}
