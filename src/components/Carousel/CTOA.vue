<template>
  <div class="ctoa_container d-flex align-center justify-center"
    :style="{
      marginTop:  $vuetify.breakpoint.xsOnly ? '16px' : 
                  $vuetify.breakpoint.smOnly ? '12px' : 
                  $vuetify.breakpoint.mdOnly ? '24px' : 
                  $vuetify.breakpoint.lgOnly ? '32px' : '40px',
    }"
  >
    <v-btn
      class="d-flex align-center justify-center"
      rounded
      color="accent"
      @click="() => callback()"
      :x-large="$vuetify.breakpoint.mdAndUp"
      :style="{
        fontSize: $vuetify.breakpoint.xsOnly ? '18px' : 
                  $vuetify.breakpoint.smOnly ? '22px' : 
                  $vuetify.breakpoint.mdOnly ? '26px' : 
                  $vuetify.breakpoint.lgOnly ? '30px' : '44px',
      }"
    >
      <span> {{text}} </span>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'CTOA',
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