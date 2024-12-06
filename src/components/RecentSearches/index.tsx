import { useCrypto } from 'context/CryptoProvider'

const RecentSearches = () => {
  const { recentSearches, addRecentSearch } = useCrypto()

  return (
    <div className="w-full max-w-md">
      <h2 className="mb-2 text-lg font-bold text-gray-800">Recent Searches</h2>
      <div className="flex flex-wrap gap-2">
        {recentSearches.length > 0 ? (
          recentSearches.map((search, index) => (
            <button
              key={index}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200"
              onClick={() => addRecentSearch(search)}
            >
              {search}
            </button>
          ))
        ) : (
          <p className="italic text-gray-500">No recent searches</p>
        )}
      </div>
    </div>
  )
}

export default RecentSearches
