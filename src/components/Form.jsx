/* eslint-disable react/self-closing-comp */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="name"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            type="text"
            name="name"
            cols="30"
            rows="3"
          />
        </label>

        <label htmlFor="attr1">
          Attr1:
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Attr2:
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Attr3:
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
          />
        </label>

        <label htmlFor="image">
          Nome:
          <input
            data-testid="image-input"
            type="text"
            name="image"
          />
        </label>

        <label htmlFor="options">
          Raridade:
          <select
            name="options"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
          />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
