import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Node from "./components/Node"
import reportWebVitals from './reportWebVitals';

const data = {
  a:"hello",
  b:{
    c:1,
    d:"qqq"
  },
  e:[
    "array",
    {
      we:{
        a1:{
          a3:"we"
        }
      }
    }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <Node jsonObject={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
