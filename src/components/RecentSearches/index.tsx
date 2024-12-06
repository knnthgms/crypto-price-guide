import { useCrypto } from 'context/CryptoProvider'

const RecentSearches = () => {
  const { recentSearches, addRecentSearch } = useCrypto()

  if (recentSearches.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="block text-lg font-bold text-gray-700">Recent Searches</h2>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((search, index) => (
          <button
            key={index}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200"
            onClick={() => addRecentSearch(search)}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches
