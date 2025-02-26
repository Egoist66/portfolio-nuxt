<script setup lang="ts">
import type { GitHubProjects } from "~~/api/projects.api.type";

const { data, status, error } = await useFetch<GitHubProjects[]>(
  "https://api.github.com/users/piotr-jura-udemy/repos#",
  {
    method: "get",
    key: "projects",
    default: () => [],
  }
);
</script>

<template>
  <div>
    <!-- <button
      :class="status === 'error' ? 'bg-red-400' : ''"
      class="px-6 py-2 mb-10 text-white rounded-md bg-blue-500"
      @click="refresh()"
    >
      {{ status === "pending" ? "Refreshing..." : "Refresh" }}
    </button> -->

    <p v-if="status === 'pending'" class="text-center">Loading...</p>
    <CommonErrorMessage
      :message="error?.statusCode + ' - ' + capitalize(error?.statusMessage! || '')"
      v-if="status === 'error'"
    />

    <ul v-else class="grid grid-cols-1 gap-4">
      <template v-if="data.length">
        <NuxtLink
          target="_blank"
          class="text-blue-500 border block border-gray-200 rounded-sm p-4 hover:bg-gray-100"
          v-for="project in data"
          :key="project.id"
          :to="project?.html_url"
        >
          <li>{{ project.name }}</li>
        </NuxtLink>
      </template>

      <h3 class="text-center text-xl" v-else>No projects</h3>
    </ul>
  </div>
</template>

<style scoped>
a {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace !important;
}
</style>
