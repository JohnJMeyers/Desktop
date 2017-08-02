import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {

  render() {

    return (
      <div className="container-fluid">

        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse sticky-top">

          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink activeStyle={{color: "#5cb85c"}} className="navbar-brand active" to="/">Hog <img alt="" className="img-fluid" src="http://www.clipartlord.com/wp-content/uploads/2015/01/pig-face2.png"></img>Blog</NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink activeClassName="selected" className="nav-link" to="/create">Create Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="selected" className="nav-link" to="/show">Show All Posts</NavLink>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled>Search</button>
            </form>

          </div>

        </nav>

        <div className="container-fluid children">
        {this.props.children}
        </div>

        <footer>
          [This is where the footer will go]
        </footer>

      </div>
    )
  }
}

export default BaseLayout;
