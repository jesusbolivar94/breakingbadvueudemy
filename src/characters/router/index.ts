import type {RouteRecordRaw} from "vue-router";
import CharacterLayout from "@/characters/layouts/CharacterLayout.vue";
import CharacterId from "@/characters/pages/CharacterId.vue";
import CharacterList from "@/characters/pages/CharacterList.vue";
import CharacterSearch from "@/characters/pages/CharacterSearch.vue";


export const charactersRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        {
            path: 'by/id',
            name: 'character-id',
            props: { title: 'Characters per Id', visible: false, },
            component: CharacterId
        },
        {
            path: 'list',
            name: 'character-list',
            props: { title: 'List of Characters', visible: true, },
            component: CharacterList
        },
        {
            path: 'search',
            name: 'character-search',
            props: { title: 'Search Characters', visible: true, },
            component: CharacterSearch
        },
    ]
}