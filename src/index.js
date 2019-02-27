// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  
  state = { lat: null, errorMsg: "" };
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error:{this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div>Loading...</div>;
  }
  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), //we called setstate!!
      //we did not!!!
      //this.setState.lat=position.coords.latitude;
      err => this.setState({ errorMsg: err.message })
    );
  }
  componentDidUpdate() {
    console.log("My component was just update - it rendered!");
  }
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
