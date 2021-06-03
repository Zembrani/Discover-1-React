import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/header/Header"
import Body from "./components/body/Body"
import './index.css'

ReactDOM.render(
  <>
    <Header></Header>
    <Body></Body>
  </>, 
  document.getElementById('root')
);
