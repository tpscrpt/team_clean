<template>
  <div class="ctoa_container d-flex align-center justify-center mt-4">
    <v-btn class="residential_cleaning_ctoa"
      rounded
      color="accent"
      @click="() => callback()"
      x-large
      :style="{
        fontSize: $vuetify.breakpoint.mdAndUp ? '26px' : '22px',
        zIndex: '22'
      }"
    >
      <span> Free Estimate </span>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'ResidentialCleaningCTOA',
  components: {},
  props: ['callback'],
  data: () => ({}),
  computed: {},
  watch: {}
}
</script>

<style>
.ctoa_container {
  width: 100%
}
.residential_cleaning_ctoa {
  font-family: 'Babylove';
}
</style>