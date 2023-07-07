<template>
    <div class="page">
        <navigation-panel
            :navItems="[
                {id: 1, name: 'Проекты'},
                {id: 2, name: 'Задачи'},
                {id: 3, name: 'Пользователи'}
            ]"
            :activeItem="'Задачи'"
        />

        <div class="content-container">
            <task-form/>
        </div>
    </div>
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import TaskForm from '@/components/TaskForm/TaskForm.vue'
export default {
    components: {
        NavigationPanel,
        TaskForm
    }

}
</script>

<style>
@import '@/scss/blocks/page.scss';
</style>