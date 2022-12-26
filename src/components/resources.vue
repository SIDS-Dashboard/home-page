<template>
  <div class="full-block resources-bg">
    <v-container class="resources-container">
      <v-row class="mt-auto">
        <v-col>
          <h2 class="resources-header text-center pt-5 pb-8">{{$t('resources.header')}}</h2>
        </v-col>
      </v-row>
      <v-row class="mb-auto">
        <v-col v-for ="resource in resources" cols="12" sm="4" :key="resource.id">
          <v-card class="resources-block d-flex flex-column" flat>
            <v-img
              eager
              max-height="220"
              width="100%"
              :src="`${path}/resources/resource-images/${resource.id}.jpg`"
            ></v-img>
            <v-chip class="ml-10 mr-auto resources-block_chip" color="#fff">{{$t(`resources.${resource.id}.badge`)}}</v-chip>
            <v-card-title class="resources-block_title pl-10 pr-16  pt-0 pb-0">
              {{$t(`resources.${resource.id}.header`)}}
            </v-card-title>
            <v-card-text class="pr-10 pl-10 resources-block_text mb-auto">
              {{$t(`resources.${resource.id}.description`)}}
            </v-card-text>
            <v-card-actions class="pl-10 pb-6 mb-0">
              <v-btn
                class="resources-block_button pr-8 pl-8"
                rounded
                color="#0969FA"
                depressed
                large
                target="_blank"
                :href="`${path}/resources/${resource.link}`"
              >
                {{$t('resources.open')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'interfaces',
    data() {
      return {
        path: process.env.VUE_APP_API_PATH,
        resources: []
      }
    },
    async created() {
     let resp = await axios.get(process.env.VUE_APP_API_PATH+'/data/cms/resources.json');
     this.resources = resp.data.featuredResources;
    }
  }
</script>
<style>
.resources-block_title {
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  min-height: 105px;
  margin-top: -20px;
  word-break: keep-all;
}
.resources-text {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
}
.resources-header{
  font-size: 32px;
  font-weight: 700;
  color: #fff;
}
.resources-block_chip {
    border: 2px solid #efefef !important;
    position: relative;
    transform: translate(0, -50%);
}

.resources-block_button {
  color: #fff !important;
}
.resources-block {
  height: 100%
}
.resources-bg {
  background-image: url("~@/assets/media/resources-bg.jpg");
  background-size: cover;
}
.resources-container {
  min-height: 100vh;
}
@media (min-height:800px) {
    .resources-block {
      margin-top: 5vh
    }
  }
</style>
