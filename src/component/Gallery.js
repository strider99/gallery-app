
import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Axios from 'axios';
class Gallery extends Component {

  state = {
    images: []
  }

  componentDidMount() {
    this.getAllImages();
  }
  getAllImages = () => {
    // store the api url in a variable
    let url = 'http://localhost:7000/gallery';

    Axios.get(url)
      .then(res => {
        this.setState({
          images: res
        })
      })
  }

  fileSubmitHandler = e => {

  }

  selectFileHandler = e => {

  }

  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
        Welcome to Gallery App
        </div>
          <h2>
            Time
          </h2>
        <h3>
          <Clock
            format={'h:mm:ssa'}
            ticking={true}
           />

        </h3>
        <form action="" encType="multipart/form-data" onSubmit={this.fileSubmitHandler}  >
          <div>
            <input type="file" name="general" id="general" onChange={this.selectFileHandler} />
            <br />
          </div>
          <button className="btn btn-primary" type="submit" >Submit File</button>
          {/* <div> {Math.round(this.state.loaded,2) } %</div> */}
        </form>

        <div>
          <hr />
          {/* map all the images here */}
          {
            this.state.images.length ? this.state.images.map(image => {
              return (
                <div>
                  <img src={image} alt=""/>
                </div>
              )
            }) : "No images found"
          }
        </div>




    </div>

    );
  }
}

export default Gallery;









