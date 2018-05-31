import React, { Component } from 'react';
import axios from 'axios';
class kerupiah extends Component {
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
              
          hasil: 14000/coba.data


          })
        })
    }


  render() {



    return (
      <div>
          <center>
            <h1>Konversi Bitcoin ke Rupiah </h1>
            <p>Kurs 1 USD = 14000 IDR</p>
            <input ref="nama" type="number" className="form-control" onInput={()=>{this.klik();}} onKeyUp={()=>{this.search()}}/>
            {this.state.userinput} BTC = {this.state.hasil}
          </center>

      </div>
    );
  }
}

export default kerupiah;