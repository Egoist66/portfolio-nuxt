<script setup lang="ts">
const route = useRouter();

const H1 = defineNuxtComponent({
  setup(props, context) {
    console.log(props);
  },

  props: {
    id: String,
  },

  render() {
    return h("h1", this.id);
  },
});
</script>

<template>
  <div>
    <H1 :id="route.currentRoute.value.params.id?.toString()" />
  </div>
</template>

<style scoped></style>
