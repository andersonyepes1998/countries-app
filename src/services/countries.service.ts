import type { Country } from '@/types/Country'

const BASE_URL =
  'https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags,cca3,languages,currencies'

export async function fetchCountriesService(): Promise<Country[]> {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    throw new Error('Error fetching countries')
  }

  return (await response.json()) as Country[]
}
