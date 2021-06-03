import React, { Component } from 'react'

import logo from '../../img/logo.svg'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Logo Dev Finance"/>
      </header>
    );
  }
}