<template>
  <v-app>
    <v-main>
      <root-header/>
      <interfaces id="content"/>
      <video-block/>
      <resources/>
      <about/>
      <root-footer/>
    </v-main>
  </v-app>
</template>

<script>
import rootHeader from './components/appHeader';
import interfaces from './components/interfaces';
import videoBlock from './components/video';
import resources from './components/resources';
import About from './components/About/About.vue';
import rootFooter from './components/footer.vue';

export default {
  name: 'App',

  components: {
    rootHeader,
    interfaces,
    videoBlock,
    resources,
    About,
    rootFooter
  },

  data: () => ({
    //
  }),
};
</script>
<style media="screen">
@import './assets/font.css';
@import './assets/styles.css';
body, .v-application {
  font-family: "Proxima Nova", sans-serif !important;
  background-color: #f4f4f4 !important;
}

html {
  scroll-behavior: smooth;
}
</style>
