import React, { Component } from 'react';
import axios from 'axios';
class kebitcoin extends Component {
  constructor(){
    super();
    this.state ={
        dataApi:[],
        userinput:'',
        hasil:'',
    }
}

  klik(){
    this.setState({userinput: this.refs.nama.value})
   }
  search(){
    var url = 'https://blockchain.info/tobtc?currency=USD&value='+ this.state.userinput
    axios.get(url)
    .then((coba)=>{
        console.log(coba.data);
        this.setState({
                
          hasil: coba.data / 14000

          })
        })
    }


  render() {



    return (
      <div>
          <center>
            <h1>Konversi Rupiah ke Bitcoin</h1>
            <p>Kurs 1 USD = 14000 IDR</p>
            <input ref="nama" type="number" className="form-control" onInput={()=>{this.klik();}} onKeyUp={()=>{this.search()}}/>
            {this.state.userinput} IDR = {this.state.hasil}
          </center>

      </div>
    );
  }
}

export default kebitcoin;