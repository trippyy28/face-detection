import React from "react";
import Logo from "./components/logo/logo";
import Particles from "react-particles-js";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <div>
        <Logo />
      </div>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
