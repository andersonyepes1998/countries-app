export interface Country {
  cca3: string
  name: {
    common: string
    official: string
  }
  capital?: string[]
  region: string
  population: number
  flags: {
    svg: string
    png: string
    alt: string
  }
  languages?: Record<string, string>
  currencies?: Record<string, { name: string; symbol: string }>
}