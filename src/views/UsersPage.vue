<template>
  <div class="content-container">
    <user-item/>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem/UserItem.vue';

export default {
    components: {
        UserItem,
    }
}
</script>

<style lang="scss">
.content-container {
    padding: 24px;
    flex-grow: 1;
}
</style>