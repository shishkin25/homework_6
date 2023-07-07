<template>
    <div class="content-container">
        <h1>Страница авторизации</h1>
        <div v-if="!isAuth">Вы не зарегистрированы!</div>
        <div v-else>Вы успешно зарегистрированы!</div>
        <base-button
            :buttonName="'Зарегистрироваться'"
            @click="click"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAuth: false
        }
    },
    methods: {
        click() {
            this.isAuth = !this.isAuth;
            const obj = {
                value: this.isAuth
            }
            localStorage.setItem('isAuth', JSON.stringify(obj));
        }
    }

}
</script>

<style lang="scss">
.content-container {
    padding: 24px;
    flex-grow: 1;
}
</style>