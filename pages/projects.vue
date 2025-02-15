<script setup lang="ts">

  useHead({
    title: 'Projects',
  })

  const route = useRoute()

</script>

<template>
  <section>
    <h1 class="text-2xl font-semibold mb-10">{{ capitalize(route.name as string) }}</h1>

    <UiProjectsList @click="console.log(2);" />

  </section>
</template>

<style scoped></style>
