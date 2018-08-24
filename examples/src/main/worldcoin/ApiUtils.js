const API_KEY = '1dsOaEESkXrO2ADxnARK0uy3sLTgDK';
const WORLD_COIN_API = 'https://www.worldcoinindex.com/apiservice/ticker?key='
const TICKER_LABELS = 'label=ethbtc-ltcbtc-btcbtc&fiat=gbp';


export const getLatestWorldCoinData = (callback) => {
  
  const url = `${WORLD_COIN_API}${API_KEY}&${TICKER_LABELS}`;
  
  fetch(url)
    .then(response => {
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(callback)
}