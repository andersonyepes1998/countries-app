<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { useCountriesStore } from '../stores/countries'
  import { useRouter } from 'vue-router'
  import SearchInput from '@/components/SearchInput.vue'
  import Navbar from '@/components/Navbar.vue'
import Pagination from '@/components/Pagination.vue'

  const store = useCountriesStore()
  store.fetchCountries()

  const search = ref('')
  const router = useRouter()

  const filteredCountries = computed(() => {
      return store.countries.filter(country =>
          country.name.common.toLowerCase().includes(search.value.toLowerCase())
      )
  })

  const paginatedFilteredCountries = computed(() => {
    const start = (store.currentPage - 1) * store.perPage
    const end = start + store.perPage
    return filteredCountries.value.slice(start, end)
  })

  watch(search, () => {
    store.setPage(1)
  })

  const goToDetail = (code: string) => {
      router.push(`/country/${code}`);
  };

</script>

<script lang="ts">
  export default {
    name: "CountriesListPage"
  }
</script>

<template>
  <Navbar />
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-10">
    <div class="w-[75%] mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-xl shadow-gray-200/60 mt-20">
      <h1 class="text-2xl font-bold mb-4">Listado de Países</h1>

      <SearchInput v-model="search" placeholder="Buscar país..." />

      <p v-if="store.loading" class="text-center text-gray-500">Cargando...</p>

      <table v-if="!store.loading" class="min-w-full bg-white border rounded-2xl">
        <thead class="bg-gray-100 text-left">
          <tr>
            <th class="py-4 px-6 border-b border-gray-200">Nombre</th>
            <th class="py-4 px-6 border-b border-gray-200">Región</th>
            <th class="py-4 px-6 border-b border-gray-200">Capital</th>
            <th class="py-4 px-6 border-b border-gray-200">Población</th>
            <th class="py-4 px-6 border-b border-gray-200 text-center">Información</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="country in paginatedFilteredCountries"
            :key="country.cca3"
            class="hover:bg-gray-50"
          >
            <td class="py-3 px-4 border-b border-gray-200">{{ country.name.common }}</td>
            <td class="py-3 px-4 border-b border-gray-200">{{ country.region }}</td>
            <td class="py-3 px-4 border-b border-gray-200">{{ country.capital?.[0] ?? 'Sin capital' }}</td>
            <td class="py-3 px-4 border-b border-gray-200">{{ country.population.toLocaleString() }}</td>
            <td class="py-3 px-4 border-b border-gray-200 text-center">
              <button
                @click="goToDetail(country.cca3)"
                class="text-blue-600 bg-blue-100 rounded-full px-4 py-2 text-sm font-semibold cursor-pointer"
              >
                Detalle
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        :currentPage="store.currentPage"
        :totalPages="store.totalPages"
        @update:page="store.setPage"
      />
    </div>
  </div>
</template>