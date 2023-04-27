<script setup lang="ts">
    import type {RouterLink} from "@/router/link-routes";

    interface Props {
        title: string,
        links: RouterLink[]
    }

    const props = defineProps<Props>()
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25" />
        <span>{{  props.title }}</span>

        <RouterLink v-for="link of props.links" :to="link.path" :key="link.path">{{ link.title }}</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}
</style>