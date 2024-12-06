import axios from 'axios'

const API_KEY = '48268587-e4af-4539-af1c-6de7dcfdb39a'
const BASE_URL = 'https://pro-api.coinmarketcap.com/v1'

exports.handler = async (event) => {
  try {
    const params = new URLSearchParams(event.queryStringParameters)
    const endpoint = params.get('endpoint')
    params.delete('endpoint')

    if (!endpoint) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Endpoint is required' })
      }
    }

    const apiUrl = `${BASE_URL}/${endpoint}`

    const response = await axios.get(apiUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
        Accept: 'application/json',
        'Accept-Encoding': 'deflate, gzip'
      },
      params
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    console.error('Error in proxy:', error.message)
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: 'An error occurred while processing the request'
      })
    }
  }
}
