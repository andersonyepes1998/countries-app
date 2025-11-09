<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps<{
    modelValue: string
    placeholder?: string
  }>()

  const emit = defineEmits(['update:modelValue'])

  const onInput = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
</script>

<template>
  <form class="max-w-md mb-6">
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>

      <input
        :value="props.modelValue"
        @input="onInput"
        type="text"
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
          focus:ring-blue-500 focus:border-blue-500"
        :placeholder="props.placeholder ?? 'Buscar...'"
      />
    </div>
  </form>
</template>