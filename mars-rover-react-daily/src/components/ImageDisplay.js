import React, { Component } from 'react'

export default class ImageDisplay extends Component {

  constructor(props) {
    super(props)


    this.state = {
      rover: this.props.rover,
      camera: this.props.camera,
      images: this.props.images,
      sol: this.props.sol
    }

    
  }


  render() {
    return (
      <div>
        {
          this.props.images.map ((picture) =>
        <div className="Nasa pics"key={picture.id}>
          <img className="pictures" src={picture.img_src} alt=""></img>
          <p>{picture.earth_date}</p>
        </div>
      )}
      </div>
    )
  }
}
