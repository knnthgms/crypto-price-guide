/* eslint-disable @typescript-eslint/no-explicit-any */
export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const cacheData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }))
}

export const getCachedData = (key: string, maxAge: number) => {
  const cached = localStorage.getItem(key)
  if (cached) {
    const { data, timestamp } = JSON.parse(cached)
    if (Date.now() - timestamp < maxAge) return data
  }
  return null
}
