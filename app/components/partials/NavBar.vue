<script setup lang="ts">

import appLinks from '@/routes/routes'


</script>

<template>
  <nav class="font-mono">
    <ul class="flex gap-3">
      <li v-for="link in appLinks" :key="link.name">
        <NuxtLink class="link" active-class="active" :to="link.alias">{{ link.name }}</NuxtLink>
      </li>
      
    </ul>
  </nav>
</template>

<style scoped >
.active {
  font-weight: bold;
  @apply p-1 bg-gray-100;

}

.link {
  @apply rounded;
  @apply p-1 hover:bg-gray-100;
}
 

</style>
