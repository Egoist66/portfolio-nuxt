<script setup lang="ts">

useHead({
  title: 'Home'
})

const route = useRoute()
const computedHeader = computed(() => route.name === 'index' ? 'Home' : capitalize(route.name as string))
</script>

<template>
  <section>
    <h1 class="text-2xl font-semibold mb-10">{{ computedHeader }}</h1>


  </section>
</template>

<style scoped>

</style>
