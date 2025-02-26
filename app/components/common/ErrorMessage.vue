<script setup lang="ts">
defineProps<{
  message?: string;
}>();

const emits = defineEmits<{
  (e?: "onError"): void;
}>();

</script>

<template>
  <p  class="text-center text-red-400 bg-red-100 p-3 rounded-lg">
    {{ message || "Error while loading! Try refresh again" }}
  </p>
</template>

<style scoped></style>
