<template>
  <div id="app">

    <navigation-panel/>
    <router-view></router-view>

  </div>
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue';

/* очищение localStorage при каждом обновлении */
localStorage.removeItem('isAuth');


export default {
  name: 'App',
  components: {
    NavigationPanel
  },
  data() {
    return {
      arrayOfItems: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'}
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
