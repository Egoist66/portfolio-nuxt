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

    <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <template v-if="data.length">
        <li v-for="project in data" :key="project.id">
          <NuxtLink
            target="_blank"
            class="text-blue-500 text-center border flex h-full items-center justify-center border-gray-200 rounded-sm p-4 hover:bg-gray-100"
            :to="project?.html_url"
          >
            {{ project.name }}
          </NuxtLink>
        </li>
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
