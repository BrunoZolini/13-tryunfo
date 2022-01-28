/* eslint-disable react/self-closing-comp */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name-input">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <textarea
            data-testid="description-input"
            type="text"
            name="description-input"
            cols="30"
            rows="3"
          />
        </label>

        <label htmlFor="attr1-input">
          Attr1:
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Attr2:
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Attr3:
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Nome:
          <input
            data-testid="image-input"
            type="text"
            name="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <select
            name="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo-input"
          />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
