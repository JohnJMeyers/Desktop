import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'


class ShowPost extends Component {

  constructor(props) {

    super(props)

    this.state = {
      hogs: []
    }
  }

  componentDidMount(){
    let url ="https://tiny-lasagna-server.herokuapp.com/collections/blogger/";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log('data', data)
      this.setState({hogs: data})
    });
  }


  render() {

    let match = this.props.match;

    let blogs = this.state.hogs.map((blogs)=>{
      return (
        // <div key={blogs._id} className="container">
          <ul key={blogs._id} className="list-group">
            <li id="show-list" className="list-group-item">

              <NavLink activeClassName="selected" className="navlink" to={`${match.url}/${blogs._id}`}>{blogs.title}</NavLink>
            </li>
          </ul>
        // </div>
    )});

    return (

      <div className="container-fluid">

        <h1 className="container-fluid latest-blog"> All Blogs </h1>
        <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
        <div className="container-fluid jumbotron show-jumbo">


          {/* <div className="cardBlock jumbotron container"> */}
            <p className="cardText cardTitle blogTitle blog-card">{blogs}</p>
          {/* </div> */}

          {/* <ul>
            <li>

            </li>
          </ul> */}


        </div>
      </div>



    )
  }

}

export default ShowPost;
