import React, { Component } from "react";

import "./style.css";
import minus from "../../../../img/minus.svg";

const value = [
  {
    className: "description",
    text: "Descrição",
  },
  {
    className: "income",
    text: "Valor",
  },
  {
    className: "date",
    text: "Data",
  },
];

const createTh = value.map(({ className, text }) => <th class={className}>{text}</th>);

export default class DataTable extends Component {
  render() {
    return (
      <table id="data-table">
        <thead>
          <tr>
            {createTh}
            <th></th>
          </tr>
        </thead>
        <tbody id="table-transactions">
          <tr>
            <td class="description">Luz</td>
            <td class="expense">-R$ 150,00</td>
            <td class="date">01/06/2021</td>
            <td>
              <img
                // onClick={}
                src={minus}
                alt="Imagem de remover dividendo"
              />
            </td>
          </tr>
          <tr>
            <td class="description">Grana</td>
            <td class="income">R$ 1150,00</td>
            <td class="date">01/06/2021</td>
            <td>
              <img
                // onClick={}
                src={minus}
                alt="Imagem de remover dividendo"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
