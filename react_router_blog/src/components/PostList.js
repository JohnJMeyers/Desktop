import React, { Component } from 'react';

export default class PostList extends Component {

  constructor(props) {

    super(props)

    this.state = {
      hogs: [],
      name: "",
      title: "",
      blog: ""
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
      this.setState({name: data[0].name})
      this.setState({title: data[0].title})
      this.setState({blog: data[0].blog})

      console.log('state', this.state.hogs)
    });
  }





  render() {

    // console.log('this.state.hogs[0].name',this.state.hogs[0])


    return (
      <div className="jumbotron">

        <h1> Latest Blog </h1>

        <div className="card  key-div cards" style={{borderColor: '#333;'}}>
          <div className="cardBlock">
            <h4 className="cardTitle">Name:</h4>
            <p className="cardText">{this.state.name}</p>
          </div>
          <div className="cardBlock">
            <h4 className="cardTitle">Title:</h4>
            <p className="cardText">{this.state.title}</p>
          </div>
          <div className="cardBlock">
            <h4 className="cardTitle">Blog:</h4>
            <p className="cardText">{this.state.blog}</p>
          </div>
        </div>
      </div>
)

}
}
// export default PostList;
