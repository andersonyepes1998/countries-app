<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps<{
        currentPage: number,
        totalPages: number
    }>()

    const emit = defineEmits(['update:page'])

    const goToPage = (page: number) => {
        if (page >= 1 && page <= props.totalPages) {
            emit('update:page', page)
        }
    }
</script>

<template>
  <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-6">
    <button
      @click="goToPage(currentPage - 1)"
      :class="[
        'px-4 py-2 rounded-lg border cursor-pointer transition',
        currentPage === 1
          ? 'text-gray-400 border-gray-200 cursor-default'
          : 'hover:bg-gray-100'
      ]"
    >
      ← Anterior
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-4 py-2 rounded-lg border transition cursor-pointer',
        currentPage === page
          ? 'bg-blue-600 text-white border-blue-600'
          : 'border-gray-300 hover:bg-gray-100'
      ]"
    >
      {{ page }}
    </button>
    <button
      @click="goToPage(currentPage + 1)"
      :class="[
        'px-4 py-2 rounded-lg border cursor-pointer transition',
        currentPage === totalPages
          ? 'text-gray-400 border-gray-200 cursor-default'
          : 'hover:bg-gray-100'
      ]"
    >
      Siguiente →
    </button>
  </div>
</template>