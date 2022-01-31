import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div>
        <h3>Filtro de Busca</h3>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onInputChange }
          name="filterName"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
