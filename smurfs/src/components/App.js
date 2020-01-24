import React, { Component } from "react";
import { connect } from "react-redux";
import { smurfGet } from '../Actions/smurfActions'

import "./App.css";


class App extends React.Component {
  componentDidMount() {
   this.props.smurfGet()
   
  }

  render(props) {
    console.log(props);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <h3> {props.name}</h3>
        <h4>{props.age}</h4>
        <h4>{props.height}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(mapStateToProps, {smurfGet})(App);
