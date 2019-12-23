<template>
  <v-app>
    <AppBar />

    <v-content>
      <Carousel v-if="false"/>
      <AboutUs v-if="true"/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar/AppBar'
import Carousel from './components/Carousel/Carousel'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',

  components: {
    AppBar,
    Carousel,
    AboutUs,
    Footer,
  },

  watch: {
  },

  data: () => ({

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

</style>
