import React, { Component } from 'react';
import axios from 'axios';

class bitcointoday extends Component {

  constructor(){
      super();
      this.state ={
          // dataApi:[]
          datajson:[]
      }
  }

  componentDidMount(){
      var url = 'https://blockchain.info/ticker'
      axios.get(url)
      .then((coba)=>{
          console.log(coba.data);
          this.setState({
                dataAUDbuy: coba.data.AUD.buy,
                dataAUDsell: coba.data.AUD.sell,
                dataEURbuy: coba.data.EUR.buy,
                dataEURsell: coba.data.EUR.sell,
                dataGBPbuy: coba.data.GBP.buy,
                dataGBPsell: coba.data.GBP.sell,
                dataJPYbuy: coba.data.JPY.buy,
                dataJPYsell: coba.data.JPY.sell,
                dataUSDbuy: coba.data.USD.buy,
                dataUSDsell: coba.data.USD.sell,
          })

      })
      
  }

      render() {
          var gaya = {
              border: '1px solid black',borderCollapse:'collapse', padding: '12px' 
          }

          

          return (

              <div>
                <center>
                  <h1>Harga Bitcoin Hari Ini</h1>

                  <table style={gaya}>
                  <tbody>
                  <tr style={gaya}>
                    <th style={gaya}>Mata Uang</th>
                    <th style={gaya}>Harga Beli Bitcoin</th> 
                    <th style={gaya}>Harga Jual Bitcoin</th>
                  </tr>
                  <tr style={gaya}>
                    <td style={gaya}>Dolar Australi </td>
                    <td style={gaya}>{this.state.dataAUDbuy}</td> 
                    <td style={gaya}>{this.state.dataAUDsell}</td>
                  </tr>
                  <tr style={gaya}>
                    <td style={gaya}>Euro Eropa </td>
                    <td style={gaya}>{this.state.dataEURbuy}</td> 
                    <td style={gaya}>{this.state.dataEURsell}</td>
                  </tr>
                  <tr style={gaya}>
                    <td style={gaya}>Poundsterling Inggris </td>
                    <td style={gaya}>{this.state.dataGBPbuy}</td> 
                    <td style={gaya}>{this.state.dataGBPsell}</td>
                  </tr>
                  <tr style={gaya}>
                    <td style={gaya}>Yen Jepang </td>
                    <td style={gaya}>{this.state.dataJPYbuy}</td> 
                    <td style={gaya}>{this.state.dataJPYsell}</td>
                  </tr>
                  <tr style={gaya}>
                    <td style={gaya}>Dollar Amerika </td>
                    <td style={gaya}>{this.state.dataUSDbuy}</td> 
                    <td style={gaya}>{this.state.dataUSDsell}</td>
                  </tr>
                  </tbody>
                  </table>
                  </center>
              </div>
          )
  }
}

export default bitcointoday;

