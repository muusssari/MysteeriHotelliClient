<template>
  <div>
    <router-view></router-view>
  </div>   
</template>

<script lang="ts">
import Content from './components/Content.vue';


console.log(`Client v${process.env.VUE_APP_VERSION}`);

export default {
  name: 'App',
  components: {
    Content,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:thin,regular,bold");
html, body {
  overflow-y: hidden !important;
  overflow: hidden;
  width   : 100%;
  max-height  : 100%;
  margin  : 0;
  padding : 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
::-webkit-scrollbar {
  width: 15px;
  background-color: #312D31;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
}
</style>