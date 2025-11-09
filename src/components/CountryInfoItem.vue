<script setup lang="ts">
  defineProps<{
    label: string;
    value: string | number | null;
  }>();
</script>

<script lang="ts">
  export default {
    name: "CountryInfoItem"
  }
</script>

<template>
  <div class="bg-gray-100 p-3 rounded-lg">
    <p>
      <strong>{{ label }}: </strong>
      <span>{{ value ?? 'No disponible' }}</span>
    </p>
  </div>
</template>
