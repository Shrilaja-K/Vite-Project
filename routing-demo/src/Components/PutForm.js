import React, { Component } from "react";
import axios from "axios";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = () => {
    const { title, body } = this.state;

    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", { title, body })
      .then((response) => {
        console.log("Post updated:", response.data);
        alert("Post updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  render() {
    return (
      <div>
        <h2>Update Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default UpdateUser;
