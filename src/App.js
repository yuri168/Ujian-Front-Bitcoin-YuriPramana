import React, { Component } from 'react';
import Bitcointoday from './komponen/bitcointoday.js';
import kebitcoin from './komponen/kebitcoin.js';
import kerupiah from './komponen/kerupiah.js';
import { Link, Route } from 'react-router-dom';
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App ">
          <img className="src" src = "https://www.blockchain.com/assets/img/bc-name-and-logo-dark-blue.svg"/>
        <ul className="nav nav-tabs">
          <li className="active"><Link to="/Bitcointoday">Bitcoin Hari Ini </Link></li>
          <li ><Link to="/kebitcoin">Bitcoin ke Rupiah/</Link></li>
          <li ><Link to="/kerupiah">Rupiah ke Bitcoin</Link></li>
        </ul>
        <div>
        <Route path="/Bitcointoday" component={Bitcointoday}/>
        <Route path="/kebitcoin" component={kebitcoin}/>
        <Route path="/kerupiah" component={kerupiah}/>
        </div>
      </div>
    );
  }
}

export default App;
