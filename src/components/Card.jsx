import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardColor,
    } = this.props;

    return (

      <div className="card" style={ { backgroundColor: cardColor } }>
        <h3 className="card-title" data-testid="name-card">{cardName}</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{`Attr1: ${cardAttr1}` }</p>
        <p data-testid="attr2-card">{`Attr2: ${cardAttr2}` }</p>
        <p data-testid="attr3-card">{`Attr3: ${cardAttr3}` }</p>
        <span data-testid="rare-card">{ cardRare }</span>
        { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : ''}
        {console.log(cardColor)}
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardColor: PropTypes.func.isRequired,
};

export default Card;
