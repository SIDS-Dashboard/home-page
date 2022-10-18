<template>
  <div class="full-block">
    <v-container>
      <v-row dense>
        <v-col>
          <h2 class="interfaces-header text-center pt-5 pb-8">Interfaces for discovery and analysis of SIDS data</h2>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col class="d-none d-md-block text-center">
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </v-col>
      </v-row>
      <div class="d-block d-sm-none">
        <v-carousel height="90%" :hide-delimiters="true">
          <v-carousel-item
            key="1"
          >
            <div class="phone-block">
              <v-card class="phone-block_card" flat>
                <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
                  Country Profiles
                </v-card-title>
                  <v-img
                    class="phone-image"
                    width="100%"
                    src="~@/assets/media/profiles.jpg"
                  ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  Country profiles for Small Island Developing States with data across the pillars of the UNDP’s SIDS Offer, financial statistics, and vulnerability index.
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
                  Development Indicators
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/indicators.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  A database of over 4000 development indicators for SIDS, compiled from 22 sources and featured alongside visualization and analytic tools.
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
                  Multidimensional Vulnerability Index
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/mvi.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  A customizable Multidimensional Vulnerability Index (MVI) for SIDS to analyze environmental, geographic, economic, and financial vulnerability.
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
                  Geospatial Data
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/gis.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  A SIDS GIS portal and database compiled from more than 80 datasets and research studies with coverage of Small Island Developing States.
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
                  UNDP Portfolio
                </v-card-title>
                <v-img
                  class="phone-image"
                  width="100%"
                  src="~@/assets/media/portfolio.jpg"
                ></v-img>
                <v-card-text class="text-center phone-block_text pr-0 pl-0">
                  A digital tool for analyzing the UNDP SIDS Offer Portfolio across the SDGs, SAMOA Pathway priorities, and six UNDP Signature Solutions.
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
              Country Profiles
            </v-card-title>
            <a href="https://data.undp.org/sids/profiles">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/profiles.jpg"
              ></v-img>
            </a>
            <v-card-text class="text-center pr-0 pl-0">
              Country profiles for Small Island Developing States with data across the pillars of the UNDP’s SIDS Offer, financial statistics, and vulnerability index.
            </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              Development Indicators
            </v-card-title>
            <a href="https://data.undp.org/sids/development-indicators">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/indicators.jpg"
              ></v-img>
            </a>
            <v-card-text class="text-center pr-0 pl-0">
              A database of over 4000 development indicators for SIDS, compiled from 22 sources and featured alongside visualization and analytic tools.
            </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              Multidimensional Vulnerability Index
            </v-card-title>
            <a href="https://data.undp.org/sids/vulnerability">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/mvi.jpg"
              ></v-img>
            </a>
            <v-card-text class="text-center pr-0 pl-0">
              A customizable Multidimensional Vulnerability Index (MVI) for SIDS to analyze environmental, geographic, economic, and financial vulnerability.
            </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              Geospatial Data
            </v-card-title>
            <a href="https://data.undp.org/sids/geospatial-data">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/gis.jpg"
              ></v-img>
            </a>
            <v-card-text class="text-center pr-0 pl-0">
              A SIDS GIS portal and database compiled from more than 80 datasets and research studies with coverage of Small Island Developing States.
            </v-card-text>
          </v-card>
        </div>
        <div class="phone-block">
          <v-card class="phone-block_card" flat>
            <v-card-title class="phone-block_title justify-center pr-0 pl-0 pt-0 pb-2">
              UNDP Portfolio
            </v-card-title>
            <a href="https://data.undp.org/sids/portfolio">
              <v-img
                class="phone-image"
                width="100%"
                src="~@/assets/media/portfolio.jpg"
              ></v-img>
            </a>
            <v-card-text class="text-center pr-0 pl-0">
              A digital tool for analyzing the UNDP SIDS Offer Portfolio across the SDGs, SAMOA Pathway priorities, and six UNDP Signature Solutions.
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
