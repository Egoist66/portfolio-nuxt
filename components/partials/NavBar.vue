<script setup lang="ts">

import appLinks from '@/routes/routes'


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
