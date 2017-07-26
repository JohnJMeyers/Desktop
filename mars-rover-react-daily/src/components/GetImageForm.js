import React, { Component } from 'react'
import '../styles/App.css'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = '2bNLMbFSW9EIl0V0hhjJfw4jDbbngnQLfI5ZphXJ'

export default class GetImageForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }

    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.handleSol = this.handleSol.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRover(event){
    event.preventDefault()
    this.setState({rover: event.target.value})
  }

  handleCamera(event){
    event.preventDefault()
    this.setState({camera: event.target.value})
  }

  handleSol(event){
    event.preventDefault()
    this.setState({sol: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    fetch('https://api.nasa.gov/planetary/apod?api_key=2bNLMbFSW9EIl0V0hhjJfw4jDbbngnQLfI5ZphXJ')
      .then(results => results.json())
        .then(Data => {
          this.setState({
            camera: this.state.camera,
            rover: this.state.rover,
            sol: this.state.sol
          });
          console.log("STATE!!!!!", this.state)
          let cam = this.state.camera;
          let rove = this.state.rover;
          let num = this.state.sol;

          let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`
          fetch(imageUrl)
          .then(res => res.json())
            .then(Data => {
              console.log(Data.photos)
              this.setState({images: Data.photos})
              })
        })
  }

//   componentDidMount() {
//   fetch(API_KEY)
//   .then(results => results.json())
//     .then(Data => {
//       this.setState({
//         camera: this.state.camera,
//         rover: this.state.rover,
//         sol: this.state.sol
//       });
//       console.log(this.state)
//       let cam = this.state.camera;
//       let rove = this.state.rover;
//       let num = this.state.sol;
//
//       let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
//     })
// }

componentDidMount() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=2bNLMbFSW9EIl0V0hhjJfw4jDbbngnQLfI5ZphXJ')
  .then(results => results.json())
    .then(Data => {
      console.log(Data)
      this.setState({

      });
      console.log(this.state)
    })
}

  render() {

    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.camera}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
          <GetImageButton />
        </form>
        
        <ImageDisplay images={this.state.images} />

        {/* {this.props.children} */}
        <div>

          {/* {
            this.state.images.map ((picture) =>
          <div className="Nasa pics"key={picture.id}>
            <img>{picture.img_src}</img>
          </div>
        )} */}

        </div>
      </div>
    )
  }
}
