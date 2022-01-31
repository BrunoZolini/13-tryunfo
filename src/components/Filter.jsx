import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <form>
        <h3>Filtro de Busca</h3>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onInputChange }
          name="filterName"
        />
        <select
          data-testid="rare-filter"
          onChange={ onInputChange }
          name="filterRare"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
