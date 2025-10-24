import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack, Button, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default class Muinavbar extends Component {
  state = {
    anchorEl: null, 
  };

  handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const menuOpen = Boolean(anchorEl);

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <AccountCircleIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STUDENT PORTAL
          </Typography>

          <Stack direction="row" spacing={2}>
           
            <Button
              color="inherit"
              onClick={this.handleMenuOpen}
            >
              Fees
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>Tuition Fees</MenuItem>
              <MenuItem onClick={this.handleMenuClose}>Hostel Fees</MenuItem>
            </Menu>

            <Button color="inherit">Timetable</Button>
            <Button color="inherit">Results</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    )
  }
}
