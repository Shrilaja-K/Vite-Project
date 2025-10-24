
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'lightgreen',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
}));

const Withstyle: React.FC = () => {
  return <StyledBox>Hello from Styled Component!</StyledBox>;
};

export default Withstyle;
