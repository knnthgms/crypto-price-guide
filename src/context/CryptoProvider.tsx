import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState
} from 'react'
import { useCryptocurrency } from 'hooks/useFetchData'
import { ListingsResponseData } from 'api/types'

interface CryptoProviderProps {
  children: ReactNode
}

interface CryptoContextType {
  currency: string
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  setCurrency: (currency: string) => void
  recentSearches: string[]
  addRecentSearch: (search: string) => void
  cryptocurrencies: ListingsResponseData[]
  filteredCryptocurrencies: ListingsResponseData[]
  loading: boolean
  error: Error | null
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined)

export const CryptoProvider: React.FC<CryptoProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const { cryptocurrencies, loading, error } = useCryptocurrency()

  const filteredCryptocurrencies = useMemo(() => {
    if (!searchTerm.trim()) return cryptocurrencies

    const lowercasedSearchTerm = searchTerm.toLowerCase()
    return cryptocurrencies.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(lowercasedSearchTerm) ||
        crypto.symbol.toLowerCase().includes(lowercasedSearchTerm)
    )
  }, [searchTerm, cryptocurrencies])

  const addRecentSearch = (search: string) => {
    setRecentSearches((prev) => {
      const newSearches = [search, ...prev.filter((item) => item !== search)]
      return newSearches.slice(0, 10)
    })
  }

  const searchUsed = filteredCryptocurrencies.length > 0

  return (
    <CryptoContext.Provider
      value={{
        recentSearches,
        searchUsed,
        setSearchTerm,
        filteredCryptocurrencies,
        addRecentSearch,
        cryptocurrencies,
        loading,
        error
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export const useCrypto = () => {
  const context = useContext(CryptoContext)
  if (!context)
    throw new Error('useCrypto must be used within a CryptoProvider')
  return context
}
