import React, { Component } from "react";

import "../../modal/style.css";
import "./style.css";

export default class FormTransaction extends Component {
	
  render() {
		const me = this.props
		const {
			active
		} = me

		const showModal = active && "modal-overlay active" || "modal-overlay"

    return (
      <div id="modal-overlay" class={showModal}>
        <div class="modal">
          <div class="form" onsubmit="Form.submit(event);">
            <h2>Nova transação</h2>
            <form action="">
              <div class="input-group">
                <label class="sr-only" for="description">
                  Descrição
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Descrição"
                />
              </div>
              <div class="input-group">
                <label class="sr-only" for="amount">
                  Valor
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="amount"
                  name="amount"
                  placeholder="0,00"
                />
                <small class="help">
                  Use o sinal - para despesas e , para casas decimais.
                </small>
              </div>
              <div class="input-group">
                <label class="sr-only" for="data">
                  Data
                </label>
                <input
                  type="date"
                  id="date"
                  name="data"
                  placeholder="01/01/2021"
                />
              </div>

              <div class="input-group actions">
                <a href="#" class="button cancel">
                  Cancelar
                </a>
                <button>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
