<template>
    <header class="menu">
        <div class="menu__content">
            <nav class="menu__nav">
                <ul class="menu__nav-list" @click="makeItemActive">
                    <li class="menu__nav-item"
                        :class="{'menu__nav-item_active': projectsIsActive}"
                    >
                        <router-link :to="'/projects'">Проекты</router-link>
                    </li>
                    <li class="menu__nav-item"
                        :class="{'menu__nav-item_active': tasksIsActive}"
                    >
                        <router-link :to="'/tasks'">Задачи</router-link>
                    </li>
                    <li class="menu__nav-item"
                        :class="{'menu__nav-item_active': usersIsActive}"
                    >
                        <router-link :to="'/users'">Пользователи</router-link>
                    </li>
                </ul>
            </nav>
            <div class="menu__user-btn">
                <div class="avatar">
                    <img :src="AvatarImg" alt="avatar">
                </div>
                <div class="menu__user-arrow">
                    <svg-icon
                        :svgName="'arrow-down'"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import AvatarImg from '@/assets/images/avatar.png'
import { PageNames } from '@/constants/pages';


export default {
    data () {
        return {
            AvatarImg, 
            selectedNavItem: null,

            projectsIsActive: true,
            tasksIsActive: false, 
            usersIsActive: false,
        }
    },
    methods: {
        selectItem(name) {
            this.selectedNavItem = name;
            this.$emit('select-item', this.selectedNavItem);
        },
        makeItemActive($event) {
            switch ($event.target.textContent) {
                case PageNames.PROJECTS:
                    this.makeProjectsActive();
                    break;
                case PageNames.TASKS:
                    this.makeTasksActive();
                    break;
                case PageNames.USERS:
                    this.makeUsersActive();
                    break;
            }
        }, 
        makeProjectsActive() {
            this.projectsIsActive = true;
            this.tasksIsActive = false;
            this.usersIsActive = false;
        },
        makeTasksActive() {
            this.projectsIsActive = false;
            this.tasksIsActive = true;
            this.usersIsActive = false;
        },
        makeUsersActive() {
            this.projectsIsActive = false;
            this.tasksIsActive = false;
            this.usersIsActive = true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/Navigation/index.scss';
</style>
