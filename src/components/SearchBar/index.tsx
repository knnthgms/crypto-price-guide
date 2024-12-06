import React from 'react'
import { useCrypto } from 'context/CryptoProvider'

const SearchBar = () => {
  const { searchTerm, setSearchTerm, loading } = useCrypto()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <form className="w-full max-w-md space-y-2">
      <div className="mx-auto flex max-w-md overflow-hidden border-b border-[#333] bg-white px-4 py-3 font-[sans-serif] focus-within:border-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="18px"
          className="mr-3 fill-gray-600"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          value={searchTerm}
          disabled={loading}
          onChange={handleInputChange}
          type="text"
          placeholder="Search for cryptocurrency"
          className="w-full text-sm outline-none"
        />
      </div>
    </form>
  )
}

export default SearchBar
