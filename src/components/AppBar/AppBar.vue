<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Team Clean Logo"
        class="shrink mr-2 mb-2"
        contain
        :src="logo"
        transition="scale-transition"
        :width="$vuetify.breakpoint.xsOnly ? '100px' :
                $vuetify.breakpoint.smOnly ? '125px' : '150px'"
      />
    </div>

    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.xsOnly">
      <v-btn text rounded class="navbar_button"
        :style="{
            fontSize: `${$vuetify.breakpoint.mdAndUp ? '22' : '15'}px !important`
        }"
      >
        Services</v-btn>
      <v-btn text rounded class="navbar_button"
        :style="{
            fontSize: `${$vuetify.breakpoint.mdAndUp ? '22' : '15'}px !important`
        }"
      >
        About us</v-btn>
      <v-btn text rounded class="navbar_button"
        :style="{
            fontSize: `${$vuetify.breakpoint.mdAndUp ? '22' : '15'}px !important`
        }"
      >
        Contact</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>
    <div class="ml-3">
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
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  components: {},
  data: () => ({
    logo: require('../../assets/logo_horiz_turq_whitetext.png'),
  }),
};
</script>

<style>
.navbar_button {
  font-family: "Babylove" !important;
}
</style>