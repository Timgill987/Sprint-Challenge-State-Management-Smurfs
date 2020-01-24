import React, { Component } from "react";
import { connect } from "react-redux";
import { smurfGet } from "../Actions/smurfActions";

import "./App.css";

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <h3> Name: {props.name}</h3>
      <h4>Age: {props.age}</h4>
      <h4>Height: {props.height}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loadingSmurf: state.loadingSmurf,
    smurfInfo: state.smurfInfo
  };
};

export default connect(mapStateToProps, { smurfGet })(App);
