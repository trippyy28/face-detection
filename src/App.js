import React,{Component} from 'react';
import Navigation from './components/navigation/navigation';
import Clarifai from 'clarifai';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/facerecognition/facerecognition';
import './App.css';
const app = new Clarifai.App({
 apiKey: '0f68e4b17c4a49ad9ce1a1873f2911cf'
});

const particlesOptions ={
 "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }   
  } 
 }
}


class App extends Component {
  constructor(){
    super()
    this.state = {
      input :'',
      imageUrl :'',
      box :{}

    }
  }

 calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox =(box) =>{
    this.setState({box:box});
    console.log(box,'hi');
  }

  onInputChange = (event) =>
  {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState ({imageUrl:this.state.input});
   app.models
   .predict(
   {id:'a403429f2ddf4b49b307e318f00e528b', version:'34ce21a40cc24b6b96ffee54aabff139'}, 
    this.state.input)
   .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
   .catch(err => console.log(err));
  }
  render(){
  return (
    <div className="App">
       <Particles className ='particles' 
       params={particlesOptions} />
    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm 
    onInputChange={this.onInputChange} 
    onButtonSubmit={this.onButtonSubmit}/>
    <FaceRecognition box ={this.state.box} imageUrl={this.state.imageUrl}/>
    </div>
  );
 }
}

export default App;
