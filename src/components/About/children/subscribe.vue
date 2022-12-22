<template>
  <div class="bg-white pb-8 pt-8">
    <v-row class="">
      <v-col>
        <v-card flat>
          <v-card-text>
            <div class="d-flex align-center justify-center">
              <h2  class="subscribe-block_header ml-auto mb-0">
                {{$t('about.fBulletin')}}
              </h2>
              <v-btn
                class="mr-auto ml-8"
                color="primary"
                rounded
                depressed
                target="_blank"
                href="https://undp.us4.list-manage.com/subscribe?u=cf50bc7216b0c4b063618fbac&id=c2c8d779ea"
              >{{$t('root.buttons.subscribe')}}</v-btn>
            </div>
          </v-card-text>
        </v-card>
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
.bg-white {
  background: #fff !important;
}
.subscribe-block_header{
  font-size: 32px;
  font-weight: 700;
  color: #0969FA !important;
}
@media (max-width:959px) {
  .subscribe-block_header {
    font-size: 24px;
  }
}
</style>
