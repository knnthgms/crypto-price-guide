import { ListingsResponseData } from 'api/types'

interface CurrencyItemProps {
  data: ListingsResponseData
  onSelect: () => void
}

const CurrencyItem = ({ data, onSelect }: CurrencyItemProps) => {
  return (
    <div
      onClick={onSelect}
      className="grid cursor-pointer grid-cols-3 items-center border-b p-4 hover:bg-gray-50"
    >
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-800">{data.name}</span>
        <span className="text-sm text-gray-500">{data.symbol}</span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-lg font-medium text-gray-900">
          ${data.quote.USD.price.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <span
          className={`text-sm font-semibold ${
            data.quote.USD.percent_change_24h >= 0
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {data.quote.USD.percent_change_24h >= 0 ? '+' : ''}
          {data.quote.USD.percent_change_24h.toFixed(2)}%
        </span>
        <div className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CurrencyItem
