import React, { Component } from 'react'

import Balance from './balance/Balance'
import Transaction from './transaction/Transaction'
import './style.css'

export default class Body extends Component {
  render() {
    return (
      <main class="container">
        <Balance/>
        <Transaction/>
      </main>
    )
  }
}