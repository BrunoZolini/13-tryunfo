/* eslint-disable arrow-body-style */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      savedCards: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target: { value, name, type, checked } }) => {
    value = (type === 'checkbox') ? checked : value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  handleError = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const number1 = Number(cardAttr1);
    const number2 = Number(cardAttr2);
    const number3 = Number(cardAttr3);
    const maxSum = 210;
    const maxAttr = 90;
    const minAttr = 0;

    const errorCases = [
      !cardName.length,
      !cardImage.length,
      !cardDescription.length,
      (number1 > maxAttr || number1 < minAttr),
      (number2 > maxAttr || number2 < minAttr),
      (number3 > maxAttr || number3 < minAttr),
      number1 + number2 + number3 > maxSum,
    ];

    const formularioPreenchido = errorCases.some((error) => error === true);

    this.setState({
      isSaveButtonDisabled: formularioPreenchido,
    });
  }

  handleSaveButton = (event) => {
    event.preventDefault();
    const {
      savedCards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newCard = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };
    this.setState({
      savedCards: [...savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo || savedCards.some((card) => card.trunfo),
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const {
      savedCards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <main>
        <h2>Adicionar nova carta</h2>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveButton }
        />
        <h2>Pré-visualização</h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h2>Todas as Cartas</h2>
        { savedCards.map(({
          name,
          description,
          attr1,
          attr2,
          attr3,
          image,
          rare,
          trunfo }) => {
          return (<Card
            key={ name }
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />);
        })}
      </main>
    );
  }
}

export default App;
