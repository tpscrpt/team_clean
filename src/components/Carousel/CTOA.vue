<template>
  <div class="ctoa_container d-flex align-center justify-center mt-4">
    <v-btn class="d-flex align-center justify-center"
      rounded
      color="accent"
      @click="() => callback()"
      :x-large="!$vuetify.breakpoint.xsOnly"
      :small="$vuetify.breakpoint.xsOnly"
      :style="{fontSize: $vuetify.breakpoint.mdAndUp ? '26px' : 
                         $vuetify.breakpoint.xsOnly  ? '18px' : '23px'}"
    >
      <span> {{text}} </span>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'ResidentialCleaningCTOA',
  components: {},
  props: ['callback', 'text'],
  data: () => ({}),
  computed: {},
  watch: {}
}
</script>

<style>
.ctoa_container {
  width: 100%;
  font-family: 'Babylove';
}
</style>