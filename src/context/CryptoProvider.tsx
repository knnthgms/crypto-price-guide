import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ContextChildren {
  children?: ReactNode
}

interface CryptoContextType {
  currency: string
  setCurrency: (currency: string) => void
  recentSearches: string[]
  addRecentSearch: (search: string) => void
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined)

export const CryptoProvider: React.FC = ({ children }: ContextChildren) => {
  const [currency, setCurrency] = useState<string>('USD')
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const addRecentSearch = (search: string) => {
    setRecentSearches((prev) => {
      const newSearches = [search, ...prev.filter((item) => item !== search)]
      return newSearches.slice(0, 10)
    })
  }

  return (
    <CryptoContext.Provider
      value={{ currency, setCurrency, recentSearches, addRecentSearch }}
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
