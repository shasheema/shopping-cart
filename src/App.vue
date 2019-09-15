<template>
  <div id="app">
    <router-view/>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
  },
  // computed: {
  //   toast() {
  //     return this.$store.getters.toast;
  //   }
  // },
  methods: {
    hideToast() {
      this.$store.commit("hideToast");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
