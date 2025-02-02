<script setup lang="ts"></script>

<template>
  <div>
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

    <slot />
  </div>
</template>

<style scoped>
a {
  display: block;
  color: deepskyblue;
}
</style>
