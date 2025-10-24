import React, { Component } from 'react';
import { Skeleton, Box, Typography } from '@mui/material';

export default class MuiSkeleton extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { loading } = this.state;

    return (
      <Box>
        
        {loading ? (
          <Skeleton variant="rectangular" width={300} height={150} />
        ) : (
          <Box
            sx={{
              width: 300,
              height: 150,
              backgroundColor: '#1976d2',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Image Loaded
          </Box>
        )}

        <Box>
          {loading ? (
            <>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </>
          ) : (
            <>
              <Typography variant="h6">Title Loaded</Typography>
              <Typography variant="body2">Description Loaded</Typography>
            </>
          )}
        </Box>
      </Box>
    );
  }
}
