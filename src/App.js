import React,{Component} from 'react';
import Navigation from './components/navigation/navigation';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
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
      "value": 100,
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
      box :{},
      route :'signin',
      isSignedin :false

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

  onRouteChange = (route) =>{
    if (route ==='signout'){
      this.setState({isSignedin:false})
    }else if(route==='home'){
      this.setState({isSignedin:true})
    }
    this.setState({route:route})
  }
  render(){
   const {isSignedin,imageUrl,route,box} = this.state;
  return (
    <div className="App">
      <Particles className ='particles' 
       params={particlesOptions} />
    <Navigation isSignedin={isSignedin} onRouteChange ={this.onRouteChange}/>
    {this.state.route === 'home'
     ?<div>
    <Logo/>
    <Rank/>
    <ImageLinkForm 
    onInputChange={this.onInputChange} 
    onButtonSubmit={this.onButtonSubmit}
    />
    <FaceRecognition box ={box} imageUrl={imageUrl}/>
    </div>
    :(
     route === 'signin'
      ? <SignIn onRouteChange={this.onRouteChange}/>
      :<Register onRouteChange = {this.onRouteChange}/>

      )
    }
    </div>
  );
 }
}

export default App;
