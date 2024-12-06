export interface ListingsResponse {
  status: Status
  data: ListingsResponseData[]
}

export interface Status {
  timestamp: string
  error_code: number
  error_message: string
  elapsed: number
  credit_count: number
  notice: string
  total_count: number
}

export interface ListingsResponseData {
  id: number
  name: string
  symbol: string
  slug: string
  num_market_pairs: number
  date_added: string
  tags: string[]
  max_supply?: number
  circulating_supply: number
  total_supply: number
  infinite_supply: boolean
  platform?: Platform
  cmc_rank: number
  self_reported_circulating_supply: string
  self_reported_market_cap: string
  tvl_ratio: string
  last_updated: string
  quote: Quote
}

export interface Platform {
  id: number
  name: string
  symbol: string
  slug: string
  token_address: string
}

export interface Quote {
  USD: Usd
}

export interface Usd {
  price: number
  volume_24h: number
  volume_change_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_30d: number
  percent_change_60d: number
  percent_change_90d: number
  market_cap: number
  market_cap_dominance: number
  fully_diluted_market_cap: number
  tvl: string
  last_updated: string
}
