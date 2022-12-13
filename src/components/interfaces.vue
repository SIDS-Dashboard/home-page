<template>
  <div class="full-block">
    <v-container>
      <v-row dense>
        <v-col>
          <h2 class="interfaces-header text-center pt-5 pb-5">{{$t('interfaces.header')}}</h2>
        </v-col>
      </v-row>
      <div class="d-flex flex-column flex-sm-row">
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-img
              class="d-sm-none mr-auto ml-auto"
              width="42"
              src="~@/assets/media/profiles.png"
            ></v-img>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2">
              <a class="title_link" href="https://data.undp.org/sids/app/profiles/">
                {{$t('interfaces.profiles.header')}}
              </a>
            </v-card-title>
            <a class="d-none d-sm-block" href="https://data.undp.org/sids/app/profiles/">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/profiles.jpg"
              ></v-img>
            </a>
            <v-card-text class="text-center phone-block_text pr-0 pl-0">
              {{$t('interfaces.profiles.description')}}
            </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-img
              class="d-sm-none mr-auto ml-auto"
              width="42"
              src="~@/assets/media/indicators.png"
            ></v-img>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2">
              <a class="title_link" href="https://data.undp.org/sids/app/development-indicators/">
                {{$t('interfaces.indicators.header')}}
              </a>
            </v-card-title>
            <a class="d-none d-sm-block" href="https://data.undp.org/sids/app/development-indicators/">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/indicators.jpg"
              ></v-img>
            </a>
              <v-card-text class="text-center phone-block_text pr-0 pl-0">
                {{$t('interfaces.indicators.description')}}
              </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-img
              class="d-sm-none mr-auto ml-auto"
              width="42"
              src="~@/assets/media/MVI.png"
            ></v-img>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2">
              <a class="title_link" href="https://data.undp.org/sids/app/vulnerability/">
                {{$t('interfaces.mvi.header')}}
              </a>
            </v-card-title>
            <a class="d-none d-sm-block" href="https://data.undp.org/sids/app/vulnerability/">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/mvi.jpg"
              ></v-img>
            </a>
              <v-card-text class="text-center phone-block_text pr-0 pl-0">
                {{$t('interfaces.mvi.description')}}
              </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-img
              class="d-sm-none mr-auto ml-auto"
              width="42"
              src="~@/assets/media/GIS.png"
            ></v-img>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2">
              <a class="title_link" href="https://data.undp.org/sids/app/geospatial-data/">
                {{$t('interfaces.gis.header')}}
              </a>
            </v-card-title>
            <a class="d-none d-sm-block" href="https://data.undp.org/sids/app/geospatial-data/">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/gis.jpg"
              ></v-img>
            </a>
              <v-card-text class="text-center phone-block_text pr-0 pl-0">
                {{$t('interfaces.gis.description')}}
              </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-img
              class="d-sm-none mr-auto ml-auto"
              width="42"
              src="~@/assets/media/portfolio.png"
            ></v-img>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2">
              <a class="title_link" href="https://data.undp.org/sids/app/portfolio/">
                {{$t('interfaces.portfolio.header')}}
              </a>
            </v-card-title>
            <a class="d-none d-sm-block" href="https://data.undp.org/sids/app/portfolio/">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/portfolio.jpg"
              ></v-img>
            </a>
              <v-card-text class="text-center phone-block_text pr-0 pl-0">
                {{$t('interfaces.portfolio.description')}}
              </v-card-text>
          </v-card>
        </div>
      </div>
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
.phone-image {
  border-radius: 24px;
  overflow: hidden;
  border: 3px solid #7f7f7f;
  transition:all 150ms ease-in;
  cursor: pointer;
}
.phone-image:hover {
  transform: scale(1.025);
}
.phone-block {
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
}
.phone-block_card {
  background: transparent !important;
}
.phone-block_title {
  word-break: keep-all;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  min-height: 64px;
  vertical-align: center
}
.interfaces-header{
  font-size: 32px;
  font-weight: 700;
  color: #0969FA;
}
.title_link {
  text-decoration: none;
  color: inherit !important;
}

  @media (max-width:639px) {
    .interfaces-header {
      font-size: 20px;
      line-height: 24px;
    }
    .top-content-chips {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    .phone-image {
      max-height: 65vh;
      margin: auto;
    }
    .phone-block {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
  }
</style>
