import StatusMessage from './StatusMessage'
import SearchBar from './SearchBar'
import RecentSearches from './RecentSearches'
import { CryptoProvider } from 'context/CryptoProvider'

function App() {
  return (
    <CryptoProvider>
      <div className="relative flex min-h-screen flex-col items-center justify-center space-y-8 bg-gray-100 p-6">
        <StatusMessage />
        <SearchBar />
        <RecentSearches />
      </div>
    </CryptoProvider>
  )
}

export default App
