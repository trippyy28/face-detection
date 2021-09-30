import React, { Component } from "react";
import Clarifai from "clarifai";
import ImageLinkForm from "./components/imagelinkform/imagelinkform";
import FaceRecognition from "./components/facerecognition/facerecognition";

const app = new Clarifai.App({
  apiKey: "0f68e4b17c4a49ad9ce1a1873f2911cf",
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  //face location calculation
  calculateFaceLocation = (data) => {
    const clarifaiFace =
    data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        {
          id: "a403429f2ddf4b49b307e318f00e528b",
          version: "34ce21a40cc24b6b96ffee54aabff139",
        },
        this.state.input
      )
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {imageUrl, box } = this.state;
    return (
      <div className="App">
        <div>
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
