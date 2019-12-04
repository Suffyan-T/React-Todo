import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"




const data = [
    {
      name: "Take Our Garbage",
      id: 123,
      purchased: false
    },
    {
      name: "Change Lightbulb",
      id: 124,
      purchased: false
    },
    {
      name: "Wash The Dishes",
      id: 1235,
      purchased: false
    }
  ];
export default data;

 
        
        
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);