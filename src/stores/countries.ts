import { defineStore } from 'pinia'
import type { Country } from '@/types/Country'
import { fetchCountriesService } from '@/services/countries.service'

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: [] as Country[],
    loading: false,

    currentPage: 1,
    perPage: 20
  }),

  actions: {
    async fetchCountries() {
      if (this.countries.length > 0) return
      this.loading = true
      try {
        this.countries = await fetchCountriesService()
      } finally {
        this.loading = false
      }
    },

    setPage(page: number) {
      this.currentPage = page
    }
  },

  getters: {
    totalPages(state) {
      return Math.ceil(state.countries.length / state.perPage)
    }
  }
})