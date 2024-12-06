import { useCrypto } from 'context/CryptoProvider'
import React from 'react'

const CurrencySelect = () => {
  const { cryptocurrencies, currency, setCurrency } = useCrypto()
  return (
    <>
      <label
        htmlFor="currency"
        className="block text-lg font-bold text-gray-700"
      >
        Select an option
      </label>
      <select
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <p className="text-sm text-gray-500">
        {cryptocurrencies.length} cryptocurrencies available.
      </p>
    </>
  )
}

export default CurrencySelect
