import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidMount() {
    console.log(this.props.match.params)
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.match.params.id !== this.props.match.params.id)
      ) {
        axios
          .get("posts/" + this.props.match.params.id)
          .then(response => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHander = () => {
    axios
      .delete("posts/" + this.props.match.params.id)
      .then(response => {
        console.log(response);
      });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Loading...</p>;
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHander} className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
