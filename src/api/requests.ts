import axios from 'axios'
import { ListingsResponseData } from './types'

const cmcApi = axios.create({
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'deflate, gzip'
  }
})

export const fetchTopCryptocurrencies = async (
  limit = 50,
  convert = 'USD'
): Promise<ListingsResponseData[]> => {
  try {
    const response = await cmcApi.get('/', {
      params: { endpoint: 'cryptocurrency/listings/latest', limit, convert }
    })
    return response.data.data
  } catch (error) {
    console.error('Error fetching top cryptocurrencies:', error)
    throw error
  }
}
