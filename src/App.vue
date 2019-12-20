<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 mb-2"
          contain
          :src="logo"
          transition="scale-transition"
          width="125"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        text
        rounded
        class="navbar_button"
      >
        Services
      </v-btn>
      <v-btn
        text
        rounded
        class="navbar_button"
      >
        About us
      </v-btn>
      <v-btn
        text
        rounded
        class="navbar_button"
      >
        Contact
      </v-btn>
      <v-spacer></v-spacer>
      <v-divider
        vertical
      ></v-divider>
      <div
        class="ml-3"
      >
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
          rounded
          outlined
          elevation="2"
          class="navbar_button mr-2"
        >
          <v-icon size="18">mdi-email</v-icon>
        </v-btn>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
          rounded
          outlined
          elevation="2"
          class="navbar_button"
        >
          <v-icon size="18">mdi-phone</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-carousel
        height="100%"
        hide-delimiter-background
        :delimiter-icon="!$vuetify.breakpoint.smAndDown ? 'mdi-circle' : 'mdi-circle-medium'"
        :show-arrows="false"
        :continuous="true"
        active-class="slide-active"
        v-model="carousel_slide"
      >
        <v-carousel-item
          :style="{
            backgroundImage: `url('${carpet_living_room}')`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }"
        >
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }"
          >
            <span>test</span>
          </div>
        </v-carousel-item>
        <v-carousel-item
          :style="{
            backgroundImage: `url('${carpet_living_room}')`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }"
        >
          <transition name="fade">
            <div
              v-if="current_slide == 1"
              :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'white'
              }"
            >
              <span class="slide_text"> TESTING </span>
            </div>
          </transition>
        </v-carousel-item>
      </v-carousel>
      <img
        :style="{
          position: 'absolute',
          width: '100%',
          bottom: $vuetify.breakpoint.mdAndUp ? '-3vh' : '0',
          objectFit: 'cover',
          minHeight: $vuetify.breakpoint.xsOnly ? '70px' : ''
        }"
        :src="wave_1"
      />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  watch: {
    carousel_slide (val) {
      setTimeout(() => this.current_slide = val, 500)
    }
  },

  data: () => ({
    logo: require('./assets/logo_horiz_turq_whitetext.png'),
    carpet_living_room: require('./assets/slides/carpet_living_room.jpg'),
    phone_number: '450-218-1279',
    wave_1: require('./assets/waves/wave_11.webp'),
    carousel_slide: 0,
    current_slide: 0
  }),

  computed: {

  },

  methods: {
  }
};
</script>
<style>
@font-face {
  font-family: "Babylove";
  src: url("assets/fonts/Babylove-zGwX.ttf") format("woff2");
}

.navbar_button {
  font-family: 'Babylove' !important
}

.v-window-item--active {
  color: white
}

.fade-enter-to {
  transition: opacity 0.3s;
  animation: slide-in  0.3s forwards;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes slide-in {
  0% { transform: translateY(50px); }
  100% { transform: translateY(0); }
}
</style>
<style lang="scss">
.v-window { 
  &-x-transition, 
  &-x-reverse-transition, 
  &-y-transition, 
  &-y-reverse-transition { 
    &-enter-active, 
    &-leave-active { 
      transition: .6s cubic-bezier(.70, .8, .50, 1) !important; 
    } 
  } 
}

</style>