import React, { Component } from "react";

import DataTable from "./dataTable/DataTable";
import FormTransaction from "../modal/newTransaction/FormTransaction"
import "./style.css";

export default class Transactions extends Component {

  render() {
    return (
      <div id="transaction">
        <h2 class="sr-only">Transações</h2>
        <a href="#" onClick={console.log("oi")} class="button new">+ Nova Transação</a>
        <FormTransaction />
        <DataTable />
      </div>
    );
  }
}
