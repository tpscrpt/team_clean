<template>
  <v-app-bar id="AppBar" app color="primary" dark>
    <div class="logo_container d-flex align-center">
      <v-img
        @click="goToAppBar"
        alt="Team Clean Logo"
        class="shrink mr-2 mb-2"
        contain
        :src="logo"
        transition="scale-transition"
        :width="$vuetify.breakpoint.smAndDown ? '125px' : '150px'"
      />
    </div>

    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex align-center justify-center shrink" :style="{
    }">
      <v-btn text rounded class="navbar_link" v-for="link in links" :key="link"
        :href="'#' + link"
        :style="{
          fontSize: `${$vuetify.breakpoint.mdAndUp ? '22' : '15'}px !important`
        }"
      >
        {{link}}
      </v-btn>
      <div class="d-flex shrink"
        :style="{
          width: '5vw'
        }"
      ></div>
    </div>
    <div v-if="$vuetify.breakpoint.smAndDown" class="ml-3 d-flex align-center justify-center">
      <v-spacer></v-spacer>
      <v-divider vertical></v-divider>
      <div >
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
          rounded
          outlined
          elevation="2"
          class="navbar_button mr-2"
          :small="$vuetify.breakpoint.smAndDown"
        >
          <v-icon :size="$vuetify.breakpoint.smAndDown ? '14' : '18'">mdi-email</v-icon>
        </v-btn>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
          rounded
          outlined
          elevation="2"
          class="navbar_button"
          :small="$vuetify.breakpoint.smAndDown"
        >
          <v-icon :size="$vuetify.breakpoint.smAndDown ? '14' : '18'">mdi-phone</v-icon>
        </v-btn>
      </div>
    </div>

  </v-app-bar>
</template>

<script>
import {s} from '../../mixins'

export default {
  name: 'AppBar',
  mixins: [s],
  components: {},
  data: () => ({
    logo: require('../../assets/logo_horiz_turq_whitetext.png'),
    links: ["Services", "Why", "Team", "Contact",]
  }),
  methods: {
    goToAppBar () {
      window.scrollTo(0, 0)
    }
  }
};
</script>

<style>
.logo_container {
  cursor: pointer;
}
.navbar_link {
  font-family: "Babylove" !important;
}

.navbar_button {
    background-color: var(--v-accent-lighten1) !important;
    font-family: "Babylove";
}
</style>