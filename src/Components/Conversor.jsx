import React, { Component } from 'react';
import './Conversor.css';

class Conversor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        /*
        Esse é o binding do JS, porem utilizei uma Arrow Function para substituir isso.
        // this.converter = this.converter.bind(this); //
        */
    }

    // Abaixo a implementação da Arrow Fuction em substituição ao biding
    //converter () {
    converter = () => {
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
        let url_api = `https://economia.awesomeapi.com.br/last/${de_para}`
            fetch(url_api)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[`${this.props.moedaA}${this.props.moedaB}`].bid;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2)
                this.setState({moedaB_valor});
            }) 
    }

    render() {
        return (
            <div className="conversor">
                <h2 className="title-card">{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        );
    }
}

export default Conversor;