<template>
  <div class="mb-6 about-resource">
    <div class="resource-image">
      <v-img
      aspect-ratio="0.70430107526"
      :src="resource.image"
      ></v-img>
    </div>
    <v-text>
      <div class="resource-bottom">
        <div class="resource-title">{{$t('resources.'+resource.id+'.name')}}</div>
        <v-btn
          class="undp-button button-tertiary button-arrow"
          color="#FFFFFF"
          depressed
          large
          target="_blank"
          :href="resource.links[0].link"
        >
        OPEN
        </v-btn>
      </div>
    </v-text>
  </div>
</template>

<script>
export default {
  name: 'AboutResource',
  props: ['resource'],
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-resource{
  background-image: url("../../../assets/media/resource-bg.png");
  background-repeat: no-repeat;
  background-position: left top;
  width: 336px;
}
.resource-title{
  font-weight: 400;
  font-size: 20px;
  line-height: 137.5%;
  color: #000000;
}
.resource-image{
  padding: 35px 48px 36px;
}
.resource-bottom{
  padding: 24px;
  background-color: #f7f7f7;
}
</style>
