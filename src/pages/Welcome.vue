<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goToList() {
    router.push('/countries')
  }
</script>

<script lang="ts">
  export default {
    name: "WelcomePage"
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <div>
      <img src="../assets/Logo-double-v-partners.png" alt="Logo" class="h-20 mb-8" />
    </div>
    <h1 class="text-3xl font-bold text-blue-500 mb-4">
      Bienvenido a la Prueba Técnica
    </h1>
    <p class="text-white mb-8 text-xl">
      Presentada por <span class="font-semibold">Anderson Yepes Bedoya</span>
    </p>
    <button
      @click="goToList"
      class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-800 hover:scale-105 transition-all cursor-pointer"
    >
      Entrar
      <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
      </svg>
    </button>
  </div>
</template> 