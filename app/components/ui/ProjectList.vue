<script setup lang="ts">
import type { GitHubProjects } from "~~/api/projects.api.type";

const projects = ref<GitHubProjects[]>([]);

const { data, status, refresh } = await useFetch<GitHubProjects[]>(
  "https://api.github.com/users/egoist66/repos#",
  {
    method: "get",
    key: "projects",
    default: () => [],
    retry: 3,
  }
);

if (data.value) {
  projects.value = data.value;
}
</script>

<template>
  <div>
    <button class="px-6 py-2 mb-10 text-white rounded-md bg-blue-500" @click="refresh()">
        {{ status === 'pending' ? 'Loading...' : 'Refresh' }}
    </button>
    <ul>
      <template v-if="projects.length">
        <li v-for="project in projects" :key="project.id">
          {{ project.name }}
        </li>
      </template>
      <p v-else>No projects</p>
    </ul>
  </div>
</template>

<style scoped></style>
