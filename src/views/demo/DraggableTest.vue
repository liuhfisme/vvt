<template>
    <a-row>
        <a-col :span="4">
            <h3>Draggable 1</h3>
            <draggable
                class="dragArea list-group"
                :list="list1"
                :group="{ name: 'people', pull: 'clone', put: false }"
                @change="log"
                item-key="name"
            >
                <template #item="{ element }">
                    <div class="list-group-item">{{ element.name }}</div>
                </template>
            </draggable>
        </a-col>

        <a-col :span="20">
            <h3>Draggable 2</h3>
            <draggable
                class="dragArea list-group"
                :list="list2"
                group="people"
                @change="log"
                item-key="name"
            >
                <template #item="{ element }">
                    <div class="list-group-item">{{ element.name }}</div>
                </template>
            </draggable>
        </a-col>

        <rawDisplayer class="col-3" :value="list1" title="List 1" />

        <rawDisplayer class="col-3" :value="list2" title="List 2" />
    </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
export default defineComponent({
    name: "clone",
    display: "Clone",
    order: 2,
    components: {
        draggable
    },
    data() {
        return {
            list1: [
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ],
            list2: [
                { name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
            ]
        };
    },
    methods: {
        log: function (evt: any) {
            window.console.log(evt);
        }
    }
});
</script>
<style scoped></style>