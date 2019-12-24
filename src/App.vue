<template>
  <v-app>
    <AppBar />

    <v-content>
      <Carousel id="Services" v-if="true"/>
      <Why id="Why" v-if="true"/>
      <Meet id="Team" v-if="true"/>
      <Contact id="Contact" v-if="false"/>
      <Footer id="Footer" v-if="true"/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar/AppBar'
import Carousel from './components/Carousel/Carousel'
import Why from './components/Why/Why'
import Meet from './components/Meet/Meet'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',

  components: {
    AppBar,
    Carousel,
    Why,
    Meet,
    Contact,
    Footer,
  },

  watch: {
  },

  data: () => ({
    wave_1: require('./assets/waves/wave_1.webp'),
  }),

  computed: {

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
