<template>
  <div class="full-block">
    <v-container>
      <v-row dense>
        <v-col>
          <h2 class="interfaces-header text-center pt-5 pb-8">{{$t('interfaces.header')}}</h2>
        </v-col>
      </v-row>
      <div class="d-block d-md-none">
        <v-carousel height="90%" :hide-delimiters="true">
          <v-carousel-item
            key="1"
          >
            <div class="phone-block">
              <v-card class="phone-block_card" flat>
                <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
                  <a class="title_link" href="https://data.undp.org/sids/profiles">
                    {{$t('interfaces.profiles.header')}}
                  </a>
                </v-card-title>
                  <v-img
                    class="phone-image"
                    width="100%"
                    src="~@/assets/media/profiles.jpg"
                  ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  {{$t('interfaces.profiles.description')}}
                </v-card-text>
              </v-card>
            </div>
          </v-carousel-item>
          <v-carousel-item
            key="2"
          >
            <div class="phone-block">
              <v-card class="phone-block_card" flat>
                <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
                  <a class="title_link" href="https://data.undp.org/sids/development-indicators">
                    {{$t('interfaces.indicators.header')}}
                  </a>
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/indicators.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  {{$t('interfaces.indicators.description')}}
                </v-card-text>
              </v-card>
            </div>
          </v-carousel-item>
          <v-carousel-item
            key="3"
          >
            <div class="phone-block">
              <v-card class="phone-block_card" flat>
                <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
                  <a class="title_link" href="https://data.undp.org/sids/vulnerability">
                    {{$t('interfaces.mvi.header')}}
                  </a>
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/mvi.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  {{$t('interfaces.mvi.description')}}
                </v-card-text>
              </v-card>
            </div>
          </v-carousel-item>
          <v-carousel-item
            key="4"
          >
            <div class="phone-block">
              <v-card class="phone-block_card" flat>
                <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
                  <a class="title_link" href="https://data.undp.org/sids/geospatial-data">
                    {{$t('interfaces.mvi.header')}}
                  </a>
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/gis.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  {{$t('interfaces.mvi.description')}}
                </v-card-text>
              </v-card>
            </div>
          </v-carousel-item>
          <v-carousel-item
            key="5"
          >
            <div class="phone-block">
              <v-card class="phone-block_card" flat>
                <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-0">
                  <a class="title_link" href="https://data.undp.org/sids/portfolio">
                    {{$t('interfaces.portfolio.header')}}
                  </a>
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/portfolio.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  {{$t('interfaces.portfolio.description')}}
                </v-card-text>
              </v-card>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="d-none d-md-flex">
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              <a class="title_link" href="https://data.undp.org/sids/portfolio">
                {{$t('interfaces.portfolio.header')}}
              </a>
            </v-card-title>
            <a href="https://data.undp.org/sids/profiles">
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
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              <a class="title_link" href="https://data.undp.org/sids/portfolio">
                {{$t('interfaces.portfolio.header')}}
              </a>
            </v-card-title>
            <a href="https://data.undp.org/sids/development-indicators">
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
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              <a class="title_link" href="https://data.undp.org/sids/portfolio">
                {{$t('interfaces.portfolio.header')}}
              </a>
            </v-card-title>
            <a href="https://data.undp.org/sids/vulnerability">
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
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              <a class="title_link" href="https://data.undp.org/sids/portfolio">
                {{$t('interfaces.portfolio.header')}}
              </a>
            </v-card-title>
            <a href="https://data.undp.org/sids/geospatial-data">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/gis.jpg"
              ></v-img>
            </a>
              <v-card-text class="text-center phone-block_text pr-0 pl-0">
                {{$t('interfaces.mvi.description')}}
              </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              <a class="title_link" href="https://data.undp.org/sids/portfolio">
                {{$t('interfaces.portfolio.header')}}
              </a>
            </v-card-title>
            <a href="https://data.undp.org/sids/portfolio">
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

  @media (max-width:959px) {
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
