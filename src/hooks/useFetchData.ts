import { useState, useEffect, useCallback } from 'react'
import { fetchTopCryptocurrencies } from '../api/requests'
import { ListingsResponseData } from 'api/types'

export const useCryptocurrency = (displayCurrency: string) => {
  const [cryptocurrencies, setCryptocurrencies] = useState<
    ListingsResponseData[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const loadTopCryptocurrencies = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchTopCryptocurrencies(50, displayCurrency)
      setCryptocurrencies(data)
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      } else {
        setError(new Error('An unknown error occurred'))
      }
    } finally {
      setLoading(false)
    }
  }, [displayCurrency])

  useEffect(() => {
    loadTopCryptocurrencies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayCurrency])

  return {
    cryptocurrencies,
    loading,
    error,
    loadTopCryptocurrencies
  }
}
