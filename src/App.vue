<!-- Old way <script lang="ts">
import {defineComponent, ref} from "vue"

export default defineComponent({
    setup(props, {emit}) {

        const counter = ref(0)

        const increase = () => {
            counter.value = counter.value + 1
        }

        return {
            counter,
            increase
        }
    }
})
</script>-->

<!--Script setup way-->
<script setup lang="ts">
import {ref} from "vue"

const counter = ref(0)
const increase = () => counter.value += 1
</script>

<template>
    <div class="wrapper">
        <h1>Counter: {{ counter }}</h1>
        <button @click="increase">+</button>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>
