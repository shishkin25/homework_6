<template>
<div class="content-container">
    <absense-of-items 
            v-if="tasks.length == 0"
            :text="'Не создана ни одна задача'"
        />
        <task-item
            v-else
            v-for="item in tasks"
            v-bind:task="item"
            v-bind:key="item.id"
    ></task-item>
</div>
           
   
</template>

<script>
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import AbsenseOfItems from '@/components/AbsenseOfItems/AbsenseOfItems.vue'
export default {
    name: 'tasks-page',
    components: {
        TaskItem,
        AbsenseOfItems
    },
    data() {
        return {
        tasks: [
            {
                id: 1,
                name: 'Название-задачи-1',
                code: '#1',
                createdBy: 'Иванов И.И. создал 1 час назад', 
                changedBy: 'Баранов В.В. изменил 1 минуту назад'
            }, 
            {
                id: 2,
                name: 'Название-задачи-2',
                code: '#2',
                createdBy: 'Иванов И.И. создал 1 час назад', 
                changedBy: 'Баранов В.В. изменил 1 минуту назад'
            },
            {
                id: 3,
                name: 'Название-задачи-3',
                code: '#3',
                createdBy: 'Иванов И.И. создал 1 час назад', 
                changedBy: 'Баранов В.В. изменил 1 минуту назад'
            }, 
            {
                id: 4,
                name: 'Название-задачи-4',
                code: '#4',
                createdBy: 'Иванов И.И. создал 1 час назад', 
                changedBy: 'Баранов В.В. изменил 1 минуту назад'
            }, 
            {
                id: 5,
                name: 'Название-задачи-5',
                code: '#5',
                createdBy: 'Иванов И.И. создал 1 час назад', 
                changedBy: 'Баранов В.В. изменил 1 минуту назад'
            }
        ],
        }
    },
}
</script>

<style lang="scss">
.content-container {
    padding: 24px;
    flex-grow: 1;
}
</style>