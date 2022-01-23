<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="nav-link" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/top-3">Top 3</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/menu">Menu</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/coontact-us">Contact Us</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />     <!-- this is where the components will render when the links are triggered -->
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style scoped src="@/assets/styles/appStyle.css">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: yellow; */
  /* margin-top: 60px; */
  /* width: 100%;
  height: 100%;
  margin: 0;
  background-color: yellow; */


}


</style>
