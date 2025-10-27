import React, { Component } from "react";
import axios from "axios";

class DeleteUser extends Component {
  handleDelete = (userId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(() => {
        console.log(`User ${userId} deleted successfully.`);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
    };

  render() {
    return (
      <div>
        <h2>Delete User</h2>
        <button onClick={() => this.handleDelete(1)}>Delete User 1</button>
      </div>
    );
  }
}

export default DeleteUser;
