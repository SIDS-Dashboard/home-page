<template>
  <div class="full-block top-block_bg">
    <a class="top-block_logo logo">
      <img class="logo_image" src="~@/assets/media/logo.png" alt=""/>
    </a>
    <div class="top-block_content top-content">
      <h1 class="top-content_header text-center">Small Island Developing States<br/>Data Platform</h1>
      <div class="top-content-chips text-center">
        <span class="top-content-chips_chip">Climate Action</span>
        <span class="top-content-chips_chip">Blue Economy</span>
        <span class="top-content-chips_chip top-content-chips_chip-last">Digital Transformation</span>
      </div>
      <div class="top-content_input">
        <v-autocomplete
          filled
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
              <v-chip :color="getColor(data.item.type)" class="input_selection-chip">{{data.item.type}}</v-chip>
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
            search
          </v-btn>
        </v-autocomplete>
      </div>
    </div>
    <div class="mt-auto">
    </div>
  </div>
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
<style>
  .top-block_bg {
    background-image: url("~@/assets/media/header-bg.jpg");
    background-size: cover;
    position:relative;
    display: flex;
    flex-direction: column;
  }
  .top-block_bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 0
  }
  .top-block_logo {
    display: inline-block;
    margin-top: 25px;
    margin-left: 25px;
    position:relative;
    z-index: 1;
  }
  .logo_image{
    max-height: 105px;
  }
  .top-content_header {
    color: #fff;
    font-size: 60px;
    font-weight: black;
    line-height: 65px;
    margin-bottom: 36px;
  }
  .top-block_content {
    position:relative;
    z-index: 1;
    margin: auto;
  }
  .top-content-chips {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 36px;
  }
  .top-content-chips_chip {
    margin-left: .5em;
    margin-right: .5em;
    position: relative;
  }
  .top-content-chips_chip::after {
    content: '';
    display: inline-block;
    width: .25em;
    height: .25em;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 100%;
    bottom: 0;
    transform: translate(.375em,-.5em);
  }
  .top-content-chips_chip-last::after {
    display: none;
  }
  .top-content_input {
    max-width: 650px;
    margin: auto;
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

  @media (max-width:600px) {
    .top-block_content {
      margin-left: 20px;
      margin-right: 20px;
    }
    .top-content_header {
      color: #fff;
      font-size: 26px;
      line-height: 32px;
      margin-bottom: 26px;
    }
    .top-content-chips {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }
</style>
