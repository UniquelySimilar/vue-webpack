<template>
  <div id="app">
    <h1>App.vue</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>|<router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>