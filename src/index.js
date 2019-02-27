// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";
/*
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";
*/
/*function getButtonText(){
    return 'Click on me';
}*/

// Create a react component
/* const App = () => {
  
  return (
    
  
   JSX, props, Component 
    <div style={{ margin: "20px" }}>
      <ApprovalCard>
        <h4 >Warning</h4>
        <p>Are you sure?</p>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:00PM"
          text="Hi there!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yestoday at 2:00PM"
          text="Excellent!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 3:00AM"
          text="I'm a nice person"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
   
  );
}; */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMsg: "" }; //initialization state:this is the only time we do direct assignment to this state

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setstate!!
        this.setState({ lat: position.coords.latitude });
        //we did not!!!
        //this.setState.lat=position.coords.latitude;
      },
      err => {
        this.setState({ errorMsg: err.message });
      }
    );
  }
  render() {
    
     
      if( this.state.errorMsg && !this.state.lat){
         return <div>Error:{this.state.errorMsg}
         </div>
      }
      if (!this.state.errorMsg && this.state.lat) {
        return <div>latitude:{this.state.lat}</div>;
      }
      return <div>Loading...</div>;
        

  }
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
