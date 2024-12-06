import { useState, useEffect, useCallback } from 'react'
import { fetchTopCryptocurrencies } from '../api/requests'
import { ListingsResponseData } from 'api/types'

export const useCryptocurrency = (displayCurrency: string) => {
  const [cryptocurrencies, setCryptocurrencies] = useState<
    ListingsResponseData[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadTopCryptocurrencies = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchTopCryptocurrencies(50, displayCurrency)
      setCryptocurrencies(data)
      // setCryptocurrencies(mockdata.data)
    } catch (err) {
      setError('Failed to fetch cryptocurrencies')
    } finally {
      setLoading(false)
    }
  }, [displayCurrency])

  useEffect(() => {
    loadTopCryptocurrencies()
  }, [displayCurrency, loadTopCryptocurrencies])

  return {
    cryptocurrencies,
    loading,
    error,
    loadTopCryptocurrencies
  }
}
