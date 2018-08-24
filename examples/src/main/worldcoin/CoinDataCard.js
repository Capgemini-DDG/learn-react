import React from 'react';

const CoinDataCard = ({coinData}) => {
  
  const convertEpochTime = () => {
    let newDate = new Date(0);
    newDate.setSeconds(coinData.Timestamp);
    return `${newDate.getHours()}:${newDate.getMinutes()}`;
  }

  return (
    <div className='column card card-container'>
      <dl>
        <dt>Label</dt>
        <dd>{coinData.Label}</dd>
        <dt>Name</dt>
        <dd>{coinData.Name}</dd>
        <dt>Price</dt>
        <dd>&pound;{coinData.Price.toFixed(2)}</dd>
        <dt>Time</dt>
        <dd>{convertEpochTime()}</dd>
      </dl>
    </div>
  )
};

export default CoinDataCard;