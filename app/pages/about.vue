<script setup lang="ts">
useHead({
  title: "About",
});

definePageMeta({
  layout: "default",

});



const route = useRoute()

</script>

<template>
  <section>
    <h1 class="text-2xl font-semibold mb-10">{{ capitalize(route.name as string) }}</h1>

  </section>
</template>

<style scoped></style>
