import React, { Component } from 'react';
import Title from '../Title';
import { getLatestWorldCoinData } from './ApiUtils';
import CoinDataCard from './CoinDataCard';

class WorldCoinContainer extends Component {

  state = {
    coinData: null,
    fetching: false
  }

  componentDidMount() {

    this.setState({
      fetching: true
    })

    getLatestWorldCoinData(response => {
      console.log(response);
      this.setState({
        coinData: response,
        fetching: false
      })
    })
  }

  render() {

    const coinDataCards = this.state.coinData && this.state.coinData.Markets.map((data, index) => <CoinDataCard key={index} coinData={data}/>)

    return (
      <div>
        <Title titleText='World Coin Example'/>
        <p>
          This example show some of the React lifecycle methods in action to display the current price of
          certain virtual currencies. 
        </p>      
          {this.state.fetching
            ? <p>Fetching data...</p>
            : 
            <div className='row'>
              {coinDataCards}
            </div>
          }
      </div>
    )
  }
}

export default WorldCoinContainer;