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

interface DisplayCurrencyType {
  code: string
  symbol: string
}
interface CryptoContextType {
  currency: DisplayCurrencyType
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  setCurrency: (currency: DisplayCurrencyType) => void
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
  const [displayCurrency, setDisplayCurrency] = useState<DisplayCurrencyType>({
    code: 'USD',
    symbol: '$'
  })

  const { cryptocurrencies, loading, error } = useCryptocurrency(
    displayCurrency.code
  )

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

  return (
    <CryptoContext.Provider
      value={{
        recentSearches,
        setSearchTerm,
        currency: displayCurrency,
        setCurrency: setDisplayCurrency,
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
