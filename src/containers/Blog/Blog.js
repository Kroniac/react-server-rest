import React, { Component } from "react";
import Posts from "../Posts/Posts";
import "./Blog.css";
import { Route, NavLink } from "react-router-dom";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blogs">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"} exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash : "daalabnyapost"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
     <Route path="/" render={()=> <h1>Homey</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
