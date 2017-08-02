import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShowPost extends Component {

  constructor(props) {

    super(props)

    this.state = {
      single: []
    }
  }

  componentDidMount(){

    const { id } = this.props.match.params
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`

    fetch(URL).then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({single: data})
    })
  }

  render() {

    return (

      <div className="container-fluid">

        <h1 className="container-fluid latest-blog"> Selected Blog </h1>

        <Link className="btn btn-large btn-danger" to="/show">Back To Blogs</Link>

        <div className="card  key-div cards jumbotron" style={{borderColor: '#333;'}}>

          <div className="container test">

            <div className="top">
              <div className="cardBlock container">
                <h4 className="cardTitle">Title:</h4>
                <p className="cardText">{this.state.single.name}</p>
              </div>
              <div className="cardBlock container">
                <h4 className="cardTitle">Author:</h4>
                <p className="cardText">{this.state.single.title}</p>
              </div>
            </div>

            <div className="cardBlock container bottom">
              <h4 className="cardTitle">Blog:</h4>
              <p className="cardText blogText">{this.state.single.blog}</p>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default ShowPost
