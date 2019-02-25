// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";

/*function getButtonText(){
    return 'Click on me';
}*/

// Create a react component
const App = () => {
  return (
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
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
