import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import "./Posts.css";
import {Route} from 'react-router-dom'
import FullPost from "../FullPost/FullPost"

class Posts extends Component {
  state = {
    post: [],
    selectedPostId: null,
    error: false
  };

  componentWillMount() {
    console.log(this.props);
    axios
      .get("posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Farid Ansari"
          };
        });
        this.setState({ post: updatedPosts });
        //console.log(response);
      })
      .catch(error => {
        this.setState({ error: true });
        //console.log(error);
      });
  }

  selectPostHandler(id) {
    this.props.history.push({pathname : "/" + id});
    <Route component={FullPost}/>
   
    
   
  }

  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>
        Something went wrong!!
      </p>
    );
    if (!this.state.error) {
      posts = this.state.post.map(post => {
        return (
          <Post
          key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectPostHandler(post.id)}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
