import React from 'react'
import CurrencyItem from 'components/CurrencyItem'
import { useCrypto } from 'context/CryptoProvider'

const CurrencyList = () => {
  const { filteredCryptocurrencies, addRecentSearch } = useCrypto()

  const onSelectItem = (name: string) => {
    addRecentSearch(name)
  }

  return (
    <div className="space-y-4 rounded-lg bg-gray-50 p-4 shadow-md">
      {filteredCryptocurrencies.length > 0 ? (
        filteredCryptocurrencies.map((item) => (
          <CurrencyItem
            data={item}
            key={item.id}
            onSelect={() => onSelectItem(item.name)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  )
}

export default CurrencyList
