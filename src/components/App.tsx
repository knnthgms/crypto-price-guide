import { useCryptocurrency } from 'hooks/useFetchData'

function App() {
  const { cryptocurrencies } = useCryptocurrency()

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center space-y-8 bg-gray-100 p-6">
      <div className="text-center">
        {false ? (
          <p className="animate-pulse text-lg font-semibold text-blue-600">
            Fetching data...
          </p>
        ) : (
          <p className="text-lg font-semibold text-green-600">
            Data loaded successfully!
          </p>
        )}
      </div>

      {/* Search Bar and Currency Dropdown */}
      <form className="w-full max-w-md space-y-4">
        <label className="block text-lg font-bold text-gray-700">
          Search for Cryptocurrency
        </label>
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="search"
            placeholder="Search for currency"
            className="flex-1 rounded-md border border-gray-300 p-4 text-lg text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {/* Currency Dropdown */}
          <select className="rounded-md border border-gray-300 p-4 text-lg text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </form>
      <p>{JSON.stringify(cryptocurrencies, null, 4)}</p>

      {/* Recent Searches */}
      <div className="w-full max-w-md">
        <h2 className="mb-2 text-lg font-bold text-gray-800">
          Recent Searches
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Bitcoin', 'Ethereum', 'Ripple'].map((search, index) => (
            <button
              key={index}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200"
            >
              {search}
            </button>
          ))}
          {/* Add a fallback if there are no recent searches */}
          {['Bitcoin', 'Ethereum', 'Ripple'].length === 0 && (
            <p className="italic text-gray-500">No recent searches</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
