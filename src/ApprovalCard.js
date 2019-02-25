// Import the React and ReactDOM Libraries
import React from "react";

/*function getButtonText(){
    return 'Click on me';
}*/

// Create a react component
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content" >
        {props.children}
        
        <div className="ui two buttons">
          <div className="ui blue button">Approve</div>
          <div className="ui button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
