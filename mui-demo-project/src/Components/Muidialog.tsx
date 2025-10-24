import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export default class Muidialog extends Component {
  state = {
    open: false, 
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <Button onClick={this.handleOpen}>
          Open Dialog
        </Button>

        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Submit the Test?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              After submitting the form, it cannot be modified.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
