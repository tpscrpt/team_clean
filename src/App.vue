<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Team Clean Logo"
          class="shrink mr-2 mb-2"
          contain
          :src="$vuetify.breakpoint.xsOnly ? sq_logo : logo"
          transition="scale-transition"
          :width="$vuetify.breakpoint.xsOnly ? '50' : '125px'"
        />
      </div>

      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.xsOnly">
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
      </div>
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
      <div
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: $vuetify.breakpoint.xsOnly ? '40%' : $vuetify.breakpoint.smOnly ? '60%' : '100%',
          backgroundColor: '#446699',
        }"
      >
        <v-carousel
          height="100%"
          hide-delimiter-background
          :hide-delimiters="$vuetify.breakpoint.xsOnly"
          :delimiter-icon="$vuetify.breakpoint.smOnly ? 'mdi-circle-medium' : 'mdi-circle'"
          :show-arrows="false"
          :continuous="true"
          v-model="carousel_slide"
        >
          <v-carousel-item
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }"
            transition="none"
            reverse-transition="none"
          >
            <transition name="item-fade">
              <div
                v-if="carousel_slide == 0"
                class="d-flex align-center justify-center wrap"
                :style="{
                  height: '100%',
                  backgroundImage: `url('${carpet_living_room}')`,
                  backgroundSize: 'cover',
                }"
              >
                <div :style="{
                  marginBottom: '5vh'
                }">
                  <transition name="fade">
                    <h3
                      v-if="carousel_slide == 0"
                      :style="{
                        color: 'white',
                        fontFamily: `'Dancing Script', cursive`,
                        fontWeight: '600',
                        fontSize: $vuetify.breakpoint.xsOnly ? '22px' : '38px',
                        textAlign: 'center'
                      }"
                    >
                      Residential Cleaning
                    </h3>
                  </transition>
                  <transition name="fade">
                    <h3
                      class="mx-8"
                      v-if="carousel_slide == 0"
                      :style="{
                        color: 'white',
                        fontFamily: `'Poppins', sans-serif`,
                        fontWeight: '600',
                        fontSize: $vuetify.breakpoint.xsOnly ? '26px' : '53px',
                        textAlign: 'center',
                      }"
                    >
                      Let us take care of your home
                    </h3>
                  </transition>
                </div>
              </div>
            </transition>
          </v-carousel-item>
          <v-carousel-item
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }"
            transition="none"
            reverse-transition="none"
          >
            <transition name="item-fade">
              <div
                v-if="carousel_slide == 1"
                class="d-flex align-center justify-center wrap"
                :style="{
                  height: '100%',
                  backgroundImage: `url('${carpet_living_room}')`,
                  backgroundSize: 'cover',
                }"
              >
                <div :style="{
                  marginBottom: '5vh'
                }">
                  <transition name="fade">
                    <h3
                      v-if="carousel_slide == 1"
                      :style="{
                        color: 'white',
                        fontFamily: `'Dancing Script', cursive`,
                        fontWeight: '600',
                        fontSize: $vuetify.breakpoint.xsOnly ? '22px' : '38px',
                        textAlign: 'center'
                      }"
                    >
                      Commercial Space Maintenance
                    </h3>
                  </transition>
                  <transition name="fade">
                    <h3
                      class="mx-8"
                      v-if="carousel_slide == 1"
                      :style="{
                        color: 'white',
                        fontFamily: `'Poppins', sans-serif`,
                        fontWeight: '600',
                        fontSize: $vuetify.breakpoint.xsOnly ? '26px' : '53px',
                        textAlign: 'center',
                      }"
                    >
                      ... Or your business
                    </h3>
                  </transition>
                </div>
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
          }"
          :src="wave_1"
        />
      </div>

    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  watch: {
  },

  data: () => ({
    logo: require('./assets/logo_horiz_turq_whitetext.png'),
    sq_logo: require('./assets/logo_turq_whitetext.png'),
    carpet_living_room: require('./assets/slides/carpet_living_room.jpg'),
    phone_number: '450-218-1279',
    wave_1: require('./assets/waves/wave_11.webp'),
    carousel_slide: 0,
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

.navbar_button {
  font-family: 'Babylove' !important
}

.v-window-item--active {
  color: white
}

.item-fade-enter-to {
  transition: opacity 1s;
}
.item-fade-enter, .item-fade-leave-to {
  opacity: 0.3
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
/**
.v-window { 
  &-x-transition, 
  &-x-reverse-transition, 
  &-y-transition, 
  &-y-reverse-transition { 
    &-enter-active, 
    &-leave-active { 
      transition: opacity 0.5s 
    } 
  } 
}
 */
</style>