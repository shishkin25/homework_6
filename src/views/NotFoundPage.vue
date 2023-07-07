<template>
  <div class="not-found">
    <back-button
        class="not-found__back"
        :buttonName="'Вернуться на главную'"
        @click="goToMain"
    />
    <div class="not-found__container">
        <h1>Ошибка 404: Страница не существует</h1>
    </div>

  </div>
</template>

<script>
export default {
    methods: {
        goToMain() {
            this.$router.push( {path: '/'} )
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/base/variables.scss';

.not-found {
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