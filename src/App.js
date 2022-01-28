import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <main>
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
          // onSaveButtonClick={  }
        />
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
      </main>
    );
  }
}

export default App;
