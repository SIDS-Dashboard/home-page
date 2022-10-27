<template>
  <div class="full-block full-video">
    <v-container>
      <iframe class="video-frame" src="https://player.vimeo.com/video/687840475?h=1c4906dc1d" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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
