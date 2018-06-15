import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 7,
      period: 180,
      payment: 0
    };

  }

  updateBalanceValue(e) {
    this.setState({
      balance: e.target.value
    });
  }

  updateInterestValue(e) {
    this.setState({
      rate: e.target.value
    });
  }

  updateTermValue(e) {
    this.setState({
      term: e.target.value,
      period: e.target.value * 12
    });
  }

  calculations() {
    const r = this.state.rate / 12 / 100;
    const b = this.state.balance;
    const n = this.state.period;
    let payment =(((r * (Math.pow((1 + r), n))) / ((Math.pow((1 + r), n)) - 1)) * b).toFixed(2);
    payment = Number(payment);
    console.log(b, r, n);
    if (this.state.rate == 0) {
      payment = (b / n).toFixed(2);
      this.setState({
        payment,
      });
    }
    this.setState({
      payment,
    });
  }

  monthlyPayment() {
    if (this.state.balance == 0) {
      return <h2>You do not have a balance...</h2>;
    }
    return <h2>Your monthly payment will be ${this.state.payment}</h2>;
  }

  render() {
    return (
      <div name='container'>
        <h3>Mortgage Calculator</h3>
        Your Loan Balance: <input name='balance' type='number' onChange={ e => this.updateBalanceValue(e) } />
        <br />
        Your Interest Rate: <input name='rate' type='number' step='.01' onChange={ e => this.updateInterestValue(e) } />
        <br />
        <select name='term' onChange={ e => this.updateTermValue(e) }>
          <option type='number'>7</option>
          <option type='number'>15</option>
          <option type='number'>30</option>
        </select> Years
        <br />
        <button
          name='submit' onClick={ () =>
            this.calculations()
          }
        >Calculate</button>
        <br />
        <div id='output'>
          {this.monthlyPayment()}
        </div>
      </div>
    );
  };
};
