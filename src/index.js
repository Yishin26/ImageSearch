// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

/*function getButtonText(){
    return 'Click on me';
}*/

// Create a react component
const App = () => {
    /*const buttonText='Click me'*/
    const buttonText={text:'Click me'};
    const labelText='Enter name:'
    return (
      <div>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        &nbsp;
        <input id="name" type="text" />
        &nbsp;
        <button style={{ backgroundColor: "blue", color: "White" }}>
          {/*buttonText*/}
          {buttonText.text}
        </button>
      </div>
    );

};


//Take the react component and show it on the screen
ReactDOM.render(
<App/>,
document.querySelector('#root')
);
