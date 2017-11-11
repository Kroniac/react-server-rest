import React, { Component } from "react";
import Posts from "../Posts/Posts";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import FullPost from "../FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blogs">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to={"/posts"}
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "daalabnyapost"
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
        <Redirect from="/" to="/posts" />
        <Switch>
          <Route path="/posts" exact component={Posts} />

          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
