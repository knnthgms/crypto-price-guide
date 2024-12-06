import axios from 'axios'
const API_KEY = import.meta.env.VITE_COINMARKETCAP_API_KEY
console.log('VITE_COINMARKETCAP_API_KEY', API_KEY)
// Initialize Axios instance

const cmcApi = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': API_KEY,
    Accept: 'application/json',
    'Accept-Encoding': 'deflate, gzip'
  }
})

// Fetch top cryptocurrencies
export const fetchTopCryptocurrencies = async (limit: number = 50) => {
  try {
    // const response = await cmcApi.get(`/cryptocurrency/listings/latest`, {
    //   params: { limit }
    // })
    // return response.data.data // Return cryptocurrency data
  } catch (error) {
    console.error('Error fetching top cryptocurrencies:', error)
    throw error
  }
}

// Fetch price conversion between currencies
export const fetchCurrencyConversion = async (
  amount: number,
  fromCurrency: string,
  toCurrency: string
) => {
  try {
    const response = await cmcApi.get(`/tools/price-conversion`, {
      params: {
        amount,
        symbol: fromCurrency,
        convert: toCurrency
      }
    })
    return response.data.data // Return conversion data
  } catch (error) {
    console.error('Error fetching currency conversion:', error)
    throw error
  }
}
