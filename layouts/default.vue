<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto max-w-2xl">
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ name: 'about' }">Go to about</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
a {
  display: block;
  color: deepskyblue;
}
</style>
