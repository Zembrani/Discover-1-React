import React, { Component } from "react";

import income from "../../../img/income.svg";
import expense from "../../../img/expense.svg";
import total from "../../../img/total.svg";
import "./style.css";

const createCard = () => {
  return (
    <>
      <div class="card">
        <h3>
          <span>Entradas</span>
          <img src={income} alt="Imagem de entradas" />
        </h3>
        <p id="incomeDisplay">R$ 200,00</p>
      </div>
      <div class="card">
        <h3>
          <span>Saídas</span>
          <img src={expense} alt="Imagem de saidas" />
        </h3>
        <p id="expensesDisplay">- R$ 150,00</p>
      </div>
      <div class="card total">
        <h3>
          <span>Total</span>
          <img src={total} alt="Imagem de total" />
        </h3>
        <p id="totalDisplay">R$ 50,00</p>
      </div>
    </>
  );
};

export default class Balance extends Component {
  render() {
    return (
      <div id="balance">
        <h2 class="sr-only">Balanço</h2>
        {createCard()}
      </div>
    );
  }
}
