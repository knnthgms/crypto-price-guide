const fetch = require('node-fetch')

const API_KEY = process.env.VITE_COINMARKETCAP_API_KEY // Ensure this is set in Netlify
const BASE_URL = 'https://pro-api.coinmarketcap.com/v1'

exports.handler = async (event) => {
  try {
    // Log incoming event for debugging
    console.log('Incoming request event:', JSON.stringify(event, null, 2))

    // Parse query string parameters
    const params = new URLSearchParams(event.queryStringParameters)
    const endpoint = params.get('endpoint')
    params.delete('endpoint') // Remove endpoint parameter before forwarding

    if (!endpoint) {
      console.error('Error: Missing "endpoint" parameter')
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Endpoint is required' })
      }
    }

    // Construct the full URL to the CoinMarketCap API
    const apiUrl = `${BASE_URL}/${endpoint}?${params.toString()}`
    console.log('Constructed API URL:', apiUrl)

    // Make the request to the CoinMarketCap API
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
        Accept: 'application/json',
        'Accept-Encoding': 'deflate, gzip'
      }
    })

    // Log the response status and headers
    console.log('API Response Status:', response.status)
    console.log(
      'API Response Headers:',
      JSON.stringify(response.headers.raw(), null, 2)
    )

    // Handle non-200 responses from the CoinMarketCap API
    if (!response.ok) {
      const errorData = await response.text() // Parse error details if available
      console.error('Error from API:', errorData)
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Error from CoinMarketCap API',
          details: errorData
        })
      }
    }

    // Parse the API response body
    const data = await response.json()
    console.log('API Response Data:', JSON.stringify(data, null, 2))

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    // Log any unexpected errors
    console.error('Unexpected error in proxy:', error.message, error.stack)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'An unexpected error occurred',
        details: error.message
      })
    }
  }
}
