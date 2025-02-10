<script setup lang="ts">

type AppLinks = {
  name: string,
  alias?: string,
  path: string
}

const appLinks: AppLinks[] = [
  {
    name: 'Home',
    alias: '/',
    path: '/'
  },
  {
    name: 'About',
    path: '/about',
    alias: 'about'
  }
]


</script>

<template>
  <nav class="font-mono">
    <ul class="flex gap-3">
      <li v-for="link in appLinks" :key="link.name">
        <NuxtLink active-class="active" :to="link.alias">{{ link.name }}</NuxtLink>
      </li>
     
    </ul>
  </nav>
</template>

<style scoped >
.active {
  font-weight: bold;
}
 

</style>
