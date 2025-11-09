<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { computed, onMounted } from 'vue'
  import { useCountriesStore } from '@/stores/countries'
  import Navbar from '@/components/Navbar.vue'
  import CountryInfoItem from '@/components/CountryInfoItem.vue'

  const route = useRoute()
  const router = useRouter()
  const store = useCountriesStore()

  const code = route.params.code

  onMounted(async () => {
    if (!store.countries.length) {
      await store.fetchCountries()
    }
  })

  const country = computed(() =>
    store.countries.find(c => c.cca3 === code)
  )

  const goBack = () => {
    router.push('/countries')
  }

</script>

<script lang="ts">
  export default {
    name: "CountryDetailPage"
  }
</script>

<template>
  <Navbar />
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-8">
    <div class="w-[80%] md:w-[60%] bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
      <div v-if="country">
        <div class="flex items-center gap-6 mb-6">
          <img
            :src="country.flags.svg"
            class="w-38 border rounded"
            :alt="country.name.common"
          />
          <div>
            <h1 class="text-4xl font-bold">{{ country.name.common }}</h1>
            <h6 class="text-gray-500 mt-1">{{ country.flags.alt }}</h6>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4 text-gray-700">
          <CountryInfoItem label="Nombre Oficial" :value="country.name.official" />
          <CountryInfoItem label="Región" :value="country.region" />
          <CountryInfoItem label="Capital" :value="country.capital?.[0] ?? 'Sin capital'" />
          <CountryInfoItem label="Población" :value="country.population.toLocaleString()" />
          <CountryInfoItem
            label="Moneda"
            :value="Object.values(country.currencies || {})
                      .map(c => `${c.name} (${c.symbol})`)
                      .join(', ')"
          />
          <CountryInfoItem
            label="Idiomas"
            :value="Object.values(country.languages || {}).join(', ')"
          />
          <CountryInfoItem label="Código" :value="country.cca3" />
        </div>
      </div>

      <p v-else class="text-center text-gray-500">Cargando detalle...</p>
      <div class="flex justify-end">
        <button
          @click="goBack"
          class="group mt-8 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white
                hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-lg cursor-pointer"
        >
          <span class="text-lg transition-transform group-hover:-translate-x-1">←</span>
          <span>Volver al listado</span>
        </button>
      </div>
    </div>
  </div>
</template>