import CurrencyItem from 'components/CurrencyItem'
import { useCrypto } from 'context/CryptoProvider'

const CurrencyList = () => {
  const { filteredCryptocurrencies, addRecentSearch, currency } = useCrypto()

  const onSelectItem = (name: string) => {
    addRecentSearch(name)
  }

  return (
    <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
      <div className="bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
        <div className="grid grid-cols-3 items-center pr-2">
          <div>Currency Name</div>
          <div className="text-right">Price</div>
          <div className="text-right">24H Change</div>
        </div>
      </div>
      {filteredCryptocurrencies?.length > 0 ? (
        <ul>
          {filteredCryptocurrencies.map((item) => (
            <CurrencyItem
              key={item.id}
              data={item}
              onSelect={() => onSelectItem(item.name)}
              currency={currency}
            />
          ))}
        </ul>
      ) : (
        <p className="py-4 text-center text-gray-500">No results found.</p>
      )}
    </div>
  )
}

export default CurrencyList
