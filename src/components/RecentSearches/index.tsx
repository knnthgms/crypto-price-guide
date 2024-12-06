import { useCrypto } from 'context/CryptoProvider'

const RecentSearches = () => {
  const { recentSearches, setSearchTerm } = useCrypto()

  if (recentSearches.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="text-lg font-medium text-gray-700">Recent</h2>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((search, index) => (
          <button
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
            onClick={() => setSearchTerm(search)}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches
