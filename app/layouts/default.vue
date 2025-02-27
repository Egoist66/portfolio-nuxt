<script setup lang="ts"></script>

<template>
  <div class="container mx-auto  px-3">
    
    <PartialsHeader />

    <main class="py-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<style scoped>
a {
  display: block;
}
</style>
