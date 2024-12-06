import { useState, useEffect } from 'react'
import {
  fetchTopCryptocurrencies,
  fetchCurrencyConversion
} from '../api/requests'
import { ListingsResponseData } from 'api/types'

const mockdata = {
  status: {
    timestamp: '2024-12-06T09:04:09.241Z',
    error_code: 0,
    error_message: null,
    elapsed: 17,
    credit_count: 1,
    notice: null,
    total_count: 10331
  },
  data: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 11823,
      date_added: '2010-07-13T00:00:00.000Z',
      tags: [
        'mineable',
        'pow',
        'sha-256',
        'store-of-value',
        'state-channel',
        'coinbase-ventures-portfolio',
        'three-arrows-capital-portfolio',
        'polychain-capital-portfolio',
        'binance-labs-portfolio',
        'blockchain-capital-portfolio',
        'boostvc-portfolio',
        'cms-holdings-portfolio',
        'dcg-portfolio',
        'dragonfly-capital-portfolio',
        'electric-capital-portfolio',
        'fabric-ventures-portfolio',
        'framework-ventures-portfolio',
        'galaxy-digital-portfolio',
        'huobi-capital-portfolio',
        'alameda-research-portfolio',
        'a16z-portfolio',
        '1confirmation-portfolio',
        'winklevoss-capital-portfolio',
        'usv-portfolio',
        'placeholder-ventures-portfolio',
        'pantera-capital-portfolio',
        'multicoin-capital-portfolio',
        'paradigm-portfolio',
        'bitcoin-ecosystem',
        'ftx-bankruptcy-estate',
        '2017-2018-alt-season'
      ],
      max_supply: 21000000,
      circulating_supply: 19790568,
      total_supply: 19790568,
      infinite_supply: false,
      platform: null,
      cmc_rank: 1,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-12-06T09:02:00.000Z',
      quote: {
        USD: {
          price: 98382.25757614661,
          volume_24h: 120988805225.34094,
          volume_change_24h: -3.33,
          percent_change_1h: 0.13385745,
          percent_change_24h: -4.40435055,
          percent_change_7d: 2.51069252,
          percent_change_30d: 33.57192896,
          percent_change_60d: 54.8778024,
          percent_change_90d: 80.87555541,
          market_cap: 1947040758554.2446,
          market_cap_dominance: 54.0859,
          fully_diluted_market_cap: 2066027409099.08,
          tvl: null,
          last_updated: '2024-12-06T09:02:00.000Z'
        }
      }
    },
    {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      num_market_pairs: 9642,
      date_added: '2015-08-07T00:00:00.000Z',
      tags: [
        'pos',
        'smart-contracts',
        'ethereum-ecosystem',
        'coinbase-ventures-portfolio',
        'three-arrows-capital-portfolio',
        'polychain-capital-portfolio',
        'binance-labs-portfolio',
        'blockchain-capital-portfolio',
        'boostvc-portfolio',
        'cms-holdings-portfolio',
        'dcg-portfolio',
        'dragonfly-capital-portfolio',
        'electric-capital-portfolio',
        'fabric-ventures-portfolio',
        'framework-ventures-portfolio',
        'hashkey-capital-portfolio',
        'kenetic-capital-portfolio',
        'huobi-capital-portfolio',
        'alameda-research-portfolio',
        'a16z-portfolio',
        '1confirmation-portfolio',
        'winklevoss-capital-portfolio',
        'usv-portfolio',
        'placeholder-ventures-portfolio',
        'pantera-capital-portfolio',
        'multicoin-capital-portfolio',
        'paradigm-portfolio',
        'layer-1',
        'ftx-bankruptcy-estate'
      ],
      max_supply: null,
      circulating_supply: 120442066.03313673,
      total_supply: 120442066.03313673,
      infinite_supply: true,
      platform: null,
      cmc_rank: 2,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-12-06T09:03:00.000Z',
      quote: {
        USD: {
          price: 3881.062294147633,
          volume_24h: 51804942449.72341,
          volume_change_24h: -20.7468,
          percent_change_1h: -0.42637903,
          percent_change_24h: -0.87911726,
          percent_change_7d: 8.82816352,
          percent_change_30d: 48.38644601,
          percent_change_60d: 56.46316451,
          percent_change_90d: 69.17800327,
          market_cap: 467443161110.44635,
          market_cap_dominance: 12.9849,
          fully_diluted_market_cap: 467443161110.45,
          tvl: null,
          last_updated: '2024-12-06T09:03:00.000Z'
        }
      }
    },
    {
      id: 825,
      name: 'Tether USDt',
      symbol: 'USDT',
      slug: 'tether',
      num_market_pairs: 107037,
      date_added: '2015-02-25T00:00:00.000Z',
      tags: [
        'stablecoin',
        'asset-backed-stablecoin',
        'avalanche-ecosystem',
        'solana-ecosystem',
        'arbitrum-ecosytem',
        'moonriver-ecosystem',
        'injective-ecosystem',
        'bnb-chain',
        'usd-stablecoin',
        'optimism-ecosystem',
        'fiat-stablecoin'
      ],
      max_supply: null,
      circulating_supply: 136630946804.38968,
      total_supply: 139193635679.82846,
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
      },
      infinite_supply: true,
      cmc_rank: 3,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-12-06T09:03:00.000Z',
      quote: {
        USD: {
          price: 1.0005558462314479,
          volume_24h: 248971304190.89264,
          volume_change_24h: -14.7201,
          percent_change_1h: 0.00833776,
          percent_change_24h: -0.05105552,
          percent_change_7d: 0.0292903,
          percent_change_30d: 0.05507294,
          percent_change_60d: 0.07294066,
          percent_change_90d: 0.06345982,
          market_cap: 136706892601.27005,
          market_cap_dominance: 3.7983,
          fully_diluted_market_cap: 139271005937.66,
          tvl: null,
          last_updated: '2024-12-06T09:03:00.000Z'
        }
      }
    },
    {
      id: 52,
      name: 'XRP',
      symbol: 'XRP',
      slug: 'xrp',
      num_market_pairs: 1469,
      date_added: '2013-08-04T00:00:00.000Z',
      tags: [
        'medium-of-exchange',
        'enterprise-solutions',
        'arrington-xrp-capital-portfolio',
        'galaxy-digital-portfolio',
        'a16z-portfolio',
        'pantera-capital-portfolio',
        'ftx-bankruptcy-estate',
        '2017-2018-alt-season'
      ],
      max_supply: 100000000000,
      circulating_supply: 57117231849,
      total_supply: 99986904872,
      infinite_supply: false,
      platform: null,
      cmc_rank: 4,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-12-06T09:03:00.000Z',
      quote: {
        USD: {
          price: 2.3106154838704014,
          volume_24h: 13713674031.45116,
          volume_change_24h: -50.205,
          percent_change_1h: -0.62064154,
          percent_change_24h: -5.23904374,
          percent_change_7d: 43.44077216,
          percent_change_30d: 333.83278654,
          percent_change_60d: 327.37771673,
          percent_change_90d: 336.92471638,
          market_cap: 131975960306.11504,
          market_cap_dominance: 3.6639,
          fully_diluted_market_cap: 231061548387.04,
          tvl: null,
          last_updated: '2024-12-06T09:03:00.000Z'
        }
      }
    },
    {
      id: 5426,
      name: 'Solana',
      symbol: 'SOL',
      slug: 'solana',
      num_market_pairs: 802,
      date_added: '2020-04-10T00:00:00.000Z',
      tags: [
        'pos',
        'platform',
        'solana-ecosystem',
        'cms-holdings-portfolio',
        'kenetic-capital-portfolio',
        'alameda-research-portfolio',
        'multicoin-capital-portfolio',
        'okx-ventures-portfolio',
        'layer-1',
        'ftx-bankruptcy-estate',
        'alleged-sec-securities',
        'cmc-crypto-awards-2024'
      ],
      max_supply: null,
      circulating_supply: 475335492.4510816,
      total_supply: 589553706.0755863,
      infinite_supply: true,
      platform: null,
      cmc_rank: 5,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-12-06T09:03:00.000Z',
      quote: {
        USD: {
          price: 237.94391877194934,
          volume_24h: 8789308581.286491,
          volume_change_24h: 15.9749,
          percent_change_1h: -0.64881124,
          percent_change_24h: 0.83098303,
          percent_change_7d: -0.45760272,
          percent_change_30d: 29.34233679,
          percent_change_60d: 60.24934403,
          percent_change_90d: 86.59407626,
          market_cap: 113103189805.2047,
          market_cap_dominance: 3.1425,
          fully_diluted_market_cap: 140280719150.15,
          tvl: null,
          last_updated: '2024-12-06T09:03:00.000Z'
        }
      }
    }
  ]
}

export const useCryptocurrency = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<
    ListingsResponseData[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadTopCryptocurrencies = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchTopCryptocurrencies()
      // setCryptocurrencies(data)
      setCryptocurrencies(mockdata.data)
    } catch (err) {
      setError('Failed to fetch cryptocurrencies')
    } finally {
      setLoading(false)
    }
  }

  const convertCurrency = async (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ) => {
    try {
      const data = await fetchCurrencyConversion(
        amount,
        fromCurrency,
        toCurrency
      )
      return data // Return the conversion result
    } catch (err) {
      setError('Failed to convert currency')
      throw err
    }
  }

  useEffect(() => {
    loadTopCryptocurrencies()
  }, [])

  return {
    cryptocurrencies,
    loading,
    error,
    loadTopCryptocurrencies,
    convertCurrency
  }
}
