import React, { Component } from 'react';
import './App.css';

import Conversor from './Components/Conversor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titulo-h1">Conversor de Moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL" />
          <Conversor moedaA="CAD" moedaB="BRL" />
          <Conversor moedaA="EUR" moedaB="BRL" />
        </div>
        <div className="linha">
          <Conversor moedaA="BRL" moedaB="USD" />
          <Conversor moedaA="BRL" moedaB="CAD" />
          <Conversor moedaA="BRL" moedaB="EUR" />
        </div>
      </div>
    );
  }
}

export default App;