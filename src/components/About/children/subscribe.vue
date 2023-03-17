<template>
  <div class="subscribe-container py-6 mt-11">
    <v-row class="subscribe-block">
      <v-col>
        <div class="d-flex align-center justify-center py-4">
          <h2  class="subscribe-block_header">
            {{$t('about.fBulletin')}}
          </h2>
          <v-btn
            class="undp-button button-secondary button-arrow ml-6"
            target="_blank"
            depressed
            href="https://undp.us4.list-manage.com/subscribe?u=cf50bc7216b0c4b063618fbac&id=c2c8d779ea"
          >{{$t('root.buttons.subscribe')}}</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'subscribe',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subscribe-container{
  background: #f7f7f7 !important;
  margin-bottom: 80px;
}
.subscribe-block_header{
  font-weight: 400;
  font-size: 25px;
  line-height: 114.2%;
  display: flex;
  align-items: center;
  color: #000000;
}
@media (max-width:959px) {
  .subscribe-block_header {
    font-size: 24px;
  }
}
</style>
