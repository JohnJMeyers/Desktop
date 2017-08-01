import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ShowPost from './ShowPost'

class data extends Component {

  constructor(props) {

    super(props)

    this.state = {
      single: []
    }


  }


  componentDidMount(){
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    // Fetch data from API
    fetch(URL).then((response) => {
      return response.json();
    }).then((data) => {
      console.log('dataaaaaaaaaaaa', data)
      this.setState({single: data})

    });
  }


  render() {


    return (

      <div>
        <Link className="btn btn-large btn-danger" to="/show">Back To Blogs</Link>

        <p>{this.state.single.name}</p>
        <p>{this.state.single.title}</p>
        <p>{this.state.single.blog}</p>

      </div>
    );
  }

}

export default data;
