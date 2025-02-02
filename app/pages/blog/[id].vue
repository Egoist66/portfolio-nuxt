<script setup lang="ts">

const route = useRouter()



const H1 = defineNuxtComponent({
    setup(props, context) {

        console.log(props);
    },
    beforeMount() {
        console.log(route);
    },
    render() {
        return h('h1', 'Blog: ' + route.currentRoute.value.params.id)
    },
    props: {
        id: String
    }
})

</script>



<template>
    <div>

        <H1 :id="route.currentRoute.value.params.id?.toString()" />
    </div>
</template>


<style scoped>

</style>