import React, { Component } from 'react';
import { Grid, Box, Typography } from '@mui/material';

export default class UIgrid extends Component {
  render() {
    const students = [
      { name: 'Ram', branch: 'CSE', gpa: 9.5 },
      { name: 'Ravi', branch: 'IT', gpa: 9.5 },
      { name: 'Rakshan', branch: 'ECE', gpa: 9.5 },
      { name: 'Raj', branch: 'EEE', gpa: 9.5 },
    ];

    return (
      <Box sx={{ padding: 3 }}> 
        <Grid container spacing={3}>
          {students.map((student, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: 2,
                  textAlign: 'center',
                  padding: 2,
                  boxShadow: 2,
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <img
                  src="/Profile.jpg"
                  alt={student.name}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    marginBottom: 10,
                  }}
                />
                <Typography variant="h6">{student.name}</Typography>
                <Typography variant="body2">
                  Rankholder  {student.branch}
                </Typography>
                <Typography variant="body2">GPA: {student.gpa}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}
