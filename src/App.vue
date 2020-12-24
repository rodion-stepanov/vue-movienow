<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import "./fonts/fonts.css";
import "./vendor/normalize.css";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.app {
  background: #363232;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0;
}
</style>
