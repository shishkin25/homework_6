<template>
  <div class="task-info">
    <back-button
        class="task-info__back"
        :buttonName="'Вернуться к спискам задач'"
        @click="goBack"
    />
    <div class="task-info__container">
        {{$route.params.id}} | {{$route.params.name}} | {{$route.params.code}}
    </div>

  </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/base/variables.scss';
.task-info {
    padding: 24px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    &__back {
        align-self: flex-start;
        margin: 0 0 24px 0;
    }
    &__container {
        border: 1px solid $border-default;
        flex-grow: 1;
    }
}

</style>