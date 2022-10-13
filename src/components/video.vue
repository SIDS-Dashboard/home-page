<template>
  <div class="full-block full-video">
    <v-container>
      <iframe class="video-frame" src="https://player.vimeo.com/video/76866320?h=defbcec356&color=b9eb23&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: 'interfaces',
    data() {
      return {
      }
    }
  }
</script>
<style>
.video-frame {
  display: block;
  min-width: 100%;
  min-height: calc(100vh - 40px);
}

@media (max-width:960px) {
  .full-video {
    width: 100%;
    min-height: auto !important;
  }
  .video-frame {
    width: 100%;
    min-height: 400px;
  }
  .player {
    width: 100%;
  }
}
</style>
