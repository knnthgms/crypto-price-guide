import { useCrypto } from 'context/CryptoProvider'

const StatusMessage = () => {
  const { loading, error } = useCrypto()

  if (loading) {
    return (
      <p className="animate-pulse text-sm font-semibold text-blue-600">
        Fetching data...
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-sm font-semibold text-red-600">
        Error fetching data: {error.message}
      </p>
    )
  }

  return (
    <p className="text-sm font-semibold text-green-600">
      Data loaded successfully!
    </p>
  )
}

export default StatusMessage
