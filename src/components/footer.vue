<template>
  <div class="footer-root">
    <div class="d-sm-block d-none footer-spacer mr-auto ml-4">
    </div>
    <p class="footer-root_text mr-auto ml-auto">{{$t('poweredBy')}}</p>
    <language-selector class="l-selector ml-4 ml-sm-auto mr-4"/>
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector'
export default {
  name: 'rootFooter',
  props: {
    msg: String
  },
  components: {
    LanguageSelector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-root {
  width: 100%;
  background: #e0e1e9;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 90px 28px -50px #5f5c8721;
}
.footer-root_text {
  margin: 0;
  color: #868686;
}
.footer-spacer {
  min-width: 260px;
}
@media (max-width:639px) {
  .footer-root_text {
    padding: 24px;
    text-align: center;
  }

  .footer-root {
    display: block;
  }
  .l-selector {
    float: right;
    max-width: 260px;
  }
}
</style>
