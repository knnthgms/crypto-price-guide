import StatusMessage from './StatusMessage'
import SearchBar from './SearchBar'
import RecentSearches from './RecentSearches'
import { CryptoProvider } from 'context/CryptoProvider'
import CurrencyList from './CurrencyList'
import CurrencySelect from './CurrencySelect'

function App() {
  return (
    <CryptoProvider>
      <div className="relative flex min-h-screen flex-col items-center bg-gray-100 p-4 sm:p-6">
        <div className="w-full max-w-4xl space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6">
          <StatusMessage />
          <div className="flex w-full items-center justify-between">
            <SearchBar />
            <CurrencySelect />
          </div>
          <RecentSearches />
          <CurrencyList />
        </div>
      </div>
    </CryptoProvider>
  )
}

export default App
