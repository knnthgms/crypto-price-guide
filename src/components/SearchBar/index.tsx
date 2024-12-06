import React from 'react'
import { useCrypto } from 'context/CryptoProvider'

const SearchBar = () => {
  const { searchTerm, setSearchTerm, loading } = useCrypto()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <form className="w-full max-w-md space-y-4">
      <label className="block text-lg font-bold text-gray-700">
        Search for Cryptocurrency
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        disabled={loading}
        placeholder="Search for cryptocurrency"
        className={`w-full rounded-md border p-4 text-lg shadow-sm focus:ring-2 ${
          loading
            ? 'cursor-not-allowed bg-gray-200 text-gray-500'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
        }`}
      />
    </form>
  )
}

export default SearchBar
