<template>
    <div class="content-container">
        <absense-of-items 
                v-if="projects.length == 0"
                :text="'Не создан ни один проект'"
            />
            <project-item
                v-else
                v-for="item in projects"
                v-bind:project="item"
                v-bind:key="item.id"
            >
            </project-item>      
    </div>    
</template>

<script>
import ProjectItem from '@/components/ProjectItem/ProjectItem.vue'
import AbsenseOfItems from '@/components/AbsenseOfItems/AbsenseOfItems.vue'

export default {
    name: 'projects-page',
    components: {
        ProjectItem,
        AbsenseOfItems
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Название-проекта-1',
                    code: '#1',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    id: 2,
                    name: 'Название-проекта-2',
                    code: '#2',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                },
                {
                    id: 3,
                    name: 'Название-проекта-3',
                    code: '#3',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    id: 4,
                    name: 'Название-проекта-4',
                    code: '#4',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    id: 5,
                    name: 'Название-проекта-5',
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