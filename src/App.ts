import {defineComponent, ref} from "vue"

export default defineComponent({
    setup() {
        const counter = ref<number>(0)

        const increase = () =>counter.value += 1

        return {
            counter,
            increase
        }
    }
})