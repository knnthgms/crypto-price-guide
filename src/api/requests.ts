import axios from 'axios'
import { ListingsResponseData } from './types'
const API_KEY = import.meta.env.VITE_COINMARKETCAP_API_KEY

const cmcApi = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': API_KEY,
    Accept: 'application/json',
    'Accept-Encoding': 'deflate, gzip'
  }
})

export const fetchTopCryptocurrencies = async (
  limit: number = 50,
  convert: string = 'USD'
): Promise<ListingsResponseData[]> => {
  try {
    const response = await cmcApi.get(`/cryptocurrency/listings/latest`, {
      params: { limit, convert }
    })
    return response.data.data
  } catch (error) {
    console.error('Error fetching top cryptocurrencies:', error)
    throw error
  }
}
