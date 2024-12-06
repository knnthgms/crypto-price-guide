import { useCrypto } from 'context/CryptoProvider'

const SearchBar = () => {
  const { cryptocurrencies, currency, setCurrency } = useCrypto()

  return (
    <form className="w-full max-w-md space-y-4">
      <label className="block text-lg font-bold text-gray-700">
        Search for Cryptocurrency
      </label>
      <input
        type="search"
        placeholder="Search for currency"
        className="w-full rounded-md border border-gray-300 p-4 text-lg text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-4 text-lg text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <p className="text-sm text-gray-500">
        {cryptocurrencies.length} cryptocurrencies available.
      </p>
    </form>
  )
}

export default SearchBar
