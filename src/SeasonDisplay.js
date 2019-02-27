// Import the React and ReactDOM Libraries
import React from "react";
import './SeasonDisplay.css'

/*function getButtonText(){
    return 'Click on me';
}*/

const seasonConfig = {
  summer: {
    text: "覺得熱",
    iconName: "sun",
    
  },
  winter: {
    text: "覺得冷",
    iconName: "snowflake",
    
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
// Create a react component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <br />
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
