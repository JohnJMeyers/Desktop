import React, { Component } from 'react';

export default class Home extends Component {

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

    return (
      <div className="container-fluid">

        <h1 className="container-fluid latest-blog"> Latest Blog </h1>

        <div className="card  key-div cards jumbotron" style={{borderColor: '#333;'}}>

          <div className="container test">
            <div className="top">
              <div className="cardBlock container">
                <h4 className="cardTitle">Title:</h4>
                <p className="cardText">{this.state.title}</p>
              </div>
              <div className="cardBlock container">
                <h4 className="cardTitle">Author:</h4>
                <p className="cardText">{this.state.name}</p>
              </div>
            </div>
            <div className="cardBlock container bottom">
              <h4 className="cardTitle">Blog:</h4>
              <p className="cardText blogText">{this.state.blog}</p>
            </div>

          </div>
        </div>

      </div>
)

}
}
// export default PostList;
