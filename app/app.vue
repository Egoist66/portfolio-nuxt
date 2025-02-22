<script setup lang="ts">


const nuxtApp = useNuxtApp()

console.log(nuxtApp);
</script>

<template>
 
  <NuxtLoadingIndicator color="deepskyblue" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
