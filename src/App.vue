<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Page1 from "./views/Page1.vue";
import Page2 from "./views/Page2.vue";

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
<div class="navbar  h-12 bg-blue-400 flex justify-center items-center">
  <router-link :to="{ name:'page1'}" active-class="active text-white">Page1</router-link>
  <router-link :to="{ name:'page2'}" active-class="active text-white" class=" ml-10">Page2</router-link>
</div>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
