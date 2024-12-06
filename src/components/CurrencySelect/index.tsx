import { useCrypto } from 'context/CryptoProvider'

interface Currency {
  code: string
  symbol: string
}

const CurrencySelect = () => {
  const { currency, setCurrency } = useCrypto()

  const availableCurrencies: Currency[] = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'JPY', symbol: '¥' },
    { code: 'AUD', symbol: 'A$' },
    { code: 'CAD', symbol: 'C$' },
    { code: 'CHF', symbol: 'Fr' },
    { code: 'CNY', symbol: '¥' },
    { code: 'INR', symbol: '₹' },
    { code: 'MXN', symbol: '$' },
    { code: 'BRL', symbol: 'R$' }
  ]

  const filteredCurrencies = availableCurrencies.filter(
    (cur) => cur.code !== currency.code
  )

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = availableCurrencies.find(
      (cur) => cur.code === e.target.value
    )
    if (selectedCurrency) {
      setCurrency(selectedCurrency)
    }
  }

  return (
    <select
      id="currency"
      value={currency.code}
      onChange={onSelect}
      aria-label="Currency select"
      className="mt-1 rounded-md border p-2"
    >
      <option value={currency.code} disabled>
        {currency.code} ({currency.symbol})
      </option>
      {filteredCurrencies.map((cur) => (
        <option key={cur.code} value={cur.code}>
          {cur.code} ({cur.symbol})
        </option>
      ))}
    </select>
  )
}

export default CurrencySelect
