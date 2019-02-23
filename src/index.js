// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';



// Create a react component
const App = () => {
    return <div> 
        <h1>Hello</h1>
        <hr style={{border:'gray solid 2px'}}></hr>
        
    </div>;

};


//Take the react component and show it on the screen
ReactDOM.render(
<App/>,
document.querySelector('#root')
);
