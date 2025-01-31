<script setup lang="ts">
import { NuxtLink } from '#components';

const route = useRoute()
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>
    <NuxtLink to="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</NuxtLink>
    <NuxtLink :to="{name: 'about'}">
      Go to about
    </NuxtLink>
  </div>
</template>

<style scoped>

  a {
    display: block;
  }

</style>
