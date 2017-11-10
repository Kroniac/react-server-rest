import React, { Component } from "react";
import Posts from "../Posts/Posts";
import "./Blog.css";
import {Route} from 'react-router-dom'

class Blog extends Component {
  render() {
    return (
      <div className="Blogs">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>

     {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
     <Route path="/" render={()=> <h1>Homey</h1>} /> */}
     <Route path= "/" exact component={Posts}/>
      </div>
    );
  }
}

export default Blog;
