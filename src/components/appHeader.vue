<template>
  <header class="header">
  <video class="header_video d-block" poster="@/assets/media/header-bg.jpg" autoplay muted loop playsinline>
    <source src="@/assets/media/videos/header-xl.webm" type="video/webm">
    <source src="@/assets/media/videos/header-xl.mp4" type="video/mp4">
  </video>
    <div class="d-none d-md-block d-lg-block d-xl-block header-bar">
      <a href="https://data.undp.org/" target="_blank">
        <img
          class="header-bar_logo"
          src="@/assets/media/logo.png"
          alt="UNDP Data Futures Platform Logo">
      </a>
    </div>
    <main role="main" class="header-text">
      <h1 class="header-text_header header-text_header-big">{{ $t("header.header[0]") }}</h1>
      <h2 class="header-text_header header-text_header-small">{{$t("header.header[1]")}}</h2>
      <h1 class="header-text_header header-text_header-big">{{$t("header.header[2]")}} </h1>
      <hr class="d-none d-md-block d-lg-block d-xl-block header-text_divider">
      <p class="d-none d-md-block d-lg-block d-xl-block header-text_description">{{$t("header.description")}}</p>
      <div class="top-content_input mr-auto ml-auto pr-4 pl-4" id="search">
          <v-autocomplete
            filled
            :menu-props="{
              'nudge-right':16
            }"
            :attach="'#search'"
            return-object
            :items="searchData"
            rounded
            @change="selectItem"
            item-text="text"
            item-value="text"
          >
            <template slot="item" slot-scope="data">
              <div class="d-flex input_selection justify-space-between">
                {{data.item.text}}
                <v-chip :color="getColor(data.item.type)" class="input_selection-chip">
                  {{$t('header.'+data.item.type)}}</v-chip>
              </div>
            </template>
            <v-btn
              class="search_button"
              slot="append"
              rounded
              large
              depressed
              color="#0969FA"
            >
              {{$t('header.search')}}
            </v-btn>
          </v-autocomplete>
        </div>
    </main>
    <img
      class="d-block d-md-none header-bar_logo-mobile"
      src="@/assets/media/logo.png"
      alt="Rising Up For Small Islands Developing States Logo"/>
  </header>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'rootHeader',
    data() {
      return {
        searchData:[]
      }
    },
    async beforeCreate() {
      let res = await axios.get('https://raw.githubusercontent.com/SIDS-Dashboard/api/staging/data/searchDict.json');
      this.searchData = res.data;
    },
    methods: {
      getColor(type) {
        if(type === 'indicator') {
          return 'green'
        }
        return 'blue'
      },
      selectItem(item) {
        let link = 'https://data.undp.org/sids/';
        if(item.type === 'indicator') {
          link += 'indicators/' + item.id
        }
        if(item.type === 'profile') {
          link += 'profiles/' + item.id
        }
        window.open(link);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.top-content_input {
  max-width: 650px;
  margin: auto;
  position: relative;
}
.top-content_input .v-input__slot {
  background: #E7F1FF !important;
}
.top-content_input .v-input__append-inner {
  margin: auto;
  margin-right: -17px;
}
.search_button {
  color: #fff !important;
  padding: 0 40px !important;
}
.input_selection {
  width: 100%;
}
.input_selection-chip {
  flex: 0 0 auto;
  margin-left: auto;
  color: #fff !important;
}
.header {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
}
.header-bar {
  width: 100%;
  padding: 30px 30px;
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;
}
.header-bar_logo {
  width: 190px;
}
.header_video {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.header-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  filter: drop-shadow(1px 1px 0px black);
  margin-bottom: auto;
  margin-top: auto;
}
.header-text_header {
  font-weight: 650;
  margin-top: -6px;
}
.header-text_header-big {
  font-size: 58px;
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -ms-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;
}

.header-text_header-small {
  font-size: 36px;
  -webkit-animation: fadein 3s;
  -moz-animation: fadein 3s;
  -ms-animation: fadein 3s;
  -o-animation: fadein 3s;
  animation: fadein 3s;
}

.header-text_divider {
  width:70%;
  margin: auto;
  border-style:solid;
  border-width:1px;
  opacity:1;
  margin-bottom:20px;
}

.header-text_description {
  font-size: 20px;
  font-weight: 400;
  -webkit-animation: fadein 3s;
  -moz-animation: fadein 3s;
  -ms-animation: fadein 3s;
  -o-animation: fadein 3s;
  animation: fadein 3s;
  max-width: 1000px;
  margin: 0 auto;
}
.header_button-down {
  margin: auto;
  position: relative;
  z-index: 3;
  margin-top: 0px;
  margin-bottom: 50px;
}

@media all and (max-width:600px) {
  .header-text_header-big {
    font-size: 36px;
    margin-bottom: .6em;
  }
  .header-text_header-small {
    font-size: 24px;
    margin-bottom: .6em;
  }
}
@media all and (max-width:959px) {

  .header {
    min-height: calc(100vh - 100px);
  }
}
.header-bar_logo-mobile {
  position: relative;
  z-index: 5;
  width: 200px;
  max-width: 70%;
  margin: 0.5em auto auto;
}
</style>
