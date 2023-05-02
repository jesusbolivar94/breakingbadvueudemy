<script setup lang="ts">
import {RouterView} from "vue-router"
import NavBar from "@/shared/components/NavBar.vue"
import type {RouterLink} from "@/router/link-routes"
import {charactersRoute} from "@/characters/router"

const routeLinks: RouterLink[] = charactersRoute.children!
    .filter( router => (router.props as { visible: boolean }).visible  )
    .map( route => {
        return {
            name: route.name as string,
            path: route.path,
            title: (route.props as { title:string, visible: boolean }).title
        }
    } )

</script>

<template>
    <h1>Characters</h1>
    <!-- Navbar -->
    <NavBar :show-icon="false" :links="routeLinks" />

    <!-- Routerview + Suspense -->
    <RouterView/>
</template>

<style scoped>

</style>