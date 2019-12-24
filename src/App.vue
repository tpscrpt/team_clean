<template>
  <v-app>
    <AppBar />

    <v-content>
      <Carousel id="Services" v-if="true"/>
      <Why id="Why" v-if="true"/>
      <Meet id="Team" v-if="true"/>
      <div class="d-flex align-start justify-space-around flex-wrap">
        <Reviews id="Reviews" v-if="true" :style="duoBlockBaseStyle"/>
        <Contact id="Contact" v-if="true" :style="duoBlockBaseStyle"/>
      </div>
      <Footer id="Footer" v-if="true"/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar/AppBar'
import Carousel from './components/Carousel/Carousel'
import Why from './components/Why/Why'
import Meet from './components/Meet/Meet'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import {s} from './mixins'

export default {
  name: 'App',

  mixins: [s],

  components: {
    AppBar,
    Carousel,
    Why,
    Meet,
    Reviews,
    Contact,
    Footer,
  },

  watch: {
  },

  data: () => ({}),

  computed: {
    duoBlockBaseStyle () {
      return {
        width: this.sn(90, 70, 50, 50, 50, 'vw'),
        padding: this.s(16, 8)
      }
    }
  },

  methods: {
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
@font-face {
  font-family: "Babylove";
  src: url("assets/fonts/Babylove-zGwX.ttf") format("woff2");
}
html {
  background-color: white !important;
}
</style>
