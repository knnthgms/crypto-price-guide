import { ListingsResponseData } from 'api/types'

interface CurrencyItemProps {
  data: ListingsResponseData
  onSelect: () => void
}

const CurrencyItem = ({ data, onSelect }: CurrencyItemProps) => {
  return (
    <div
      onClick={onSelect}
      className="flex cursor-pointer items-center justify-between rounded-md border p-4 shadow transition hover:bg-gray-50"
    >
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-800">{data.name}</span>
        <span className="text-sm text-gray-500">{data.symbol}</span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-lg font-medium text-green-600">
          ${data.quote.USD.price.toFixed(2)}
        </span>
        <span
          className={`text-sm font-semibold ${
            data.quote.USD.percent_change_24h >= 0
              ? 'text-green-500'
              : 'text-red-500'
          }`}
        >
          {data.quote.USD.percent_change_24h >= 0 ? '+' : ''}
          {data.quote.USD.percent_change_24h.toFixed(2)}%
        </span>
      </div>
    </div>
  )
}

export default CurrencyItem
