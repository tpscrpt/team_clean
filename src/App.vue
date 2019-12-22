<template>
  <v-app>
    <AppBar />

    <v-content>
      <Carousel v-if="true"/>
      <img
        class="wave"
        :style="{bottom: $vuetify.breakpoint.lgAndUp ? '90px' :
                         $vuetify.breakpoint.mdAndUp ? '60px' : 
                         $vuetify.breakpoint.smAndUp ? '40px' :
                         $vuetify.breakpoint.xsOnly ? '20px' : '',
                 position: 'relative'}"
        :src="wave_1"
      />
      <Welcome v-if="true"/>
      <Statements v-if="false"/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar/AppBar'
import Carousel from './components/Carousel/Carousel'
import Welcome from './components/Welcome/Welcome'
import Statements from './components/Statements/Statements'

export default {
  name: 'App',

  components: {
    AppBar,
    Carousel,
    Welcome,
    Statements
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
.wave {
  width: 100%;
  object-fit: cover;
}
</style>
