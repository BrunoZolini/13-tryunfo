import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onInputChange, trunfoCheckbox } = this.props;
    return (
      <form>
        <h3>Filtro de Busca</h3>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onInputChange }
          name="filterName"
          disabled={ trunfoCheckbox }
        />
        <select
          data-testid="rare-filter"
          onChange={ onInputChange }
          name="filterRare"
          disabled={ trunfoCheckbox }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="filterTrunfo">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
            name="filterTrunfo"
          />
          Super Trunfo
        </label>
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  trunfoCheckbox: PropTypes.bool.isRequired,
};

export default Filter;
