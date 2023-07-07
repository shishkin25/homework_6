<template>
    <div class="page">
        <navigation-panel
            :navItems="[
                {id: 1, name: 'Проекты'},
                {id: 2, name: 'Задачи'},
                {id: 3, name: 'Пользователи'}
            ]"
            :activeItem="'Пользователи'"
            @select-item="selectItem"
        />
        <div class="content-container">
            <profile-item/>
        </div>
    </div>
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'
export default {
    name: 'profiles-page',
    components: {
        NavigationPanel,
        ProfileItem
    }, 
    data() {
        return {
            selectedNavItem: null
        }
    },
    methods: {
        selectItem($event) {
            this.selectedNavItem = $event;
            this.$emit('select-item', this.selectedNavItem);
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/blocks/page.scss';
</style>