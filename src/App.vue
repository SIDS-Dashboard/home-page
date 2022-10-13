<template>
  <v-app>
    <v-main>
      <root-header/>
      <interfaces/>
      <video-block/>
      <resources/>
      <about/>
    </v-main>
  </v-app>
</template>

<script>
import rootHeader from './components/appHeader';
import interfaces from './components/interfaces';
import videoBlock from './components/video';
import resources from './components/resources';
import About from './components/About/About.vue';

export default {
  name: 'App',

  components: {
    rootHeader,
    interfaces,
    videoBlock,
    resources,
    About
  },

  data: () => ({
    //
  }),
};
</script>
<style media="screen">
@import './assets/font.css';
@import './assets/styles.css';
body {
  font-family: "Proxima Nova", sans-serif !important;
  background-color: #1E1E1E;
}
</style>
