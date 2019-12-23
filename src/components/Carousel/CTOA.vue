<template>
  <div class="ctoa_container d-flex align-center justify-center"
    :style="{
      marginTop: sn(16, 12, 24, 32, 40)
    }"
  >
    <v-btn
      class="d-flex align-center justify-center"
      rounded
      color="accent"
      @click="() => callback()"
      :x-large="$vuetify.breakpoint.mdAndUp"
      :style="{
        fontSize: s(18, 4)
      }"
    >
      <span> {{text}} </span>
    </v-btn>
  </div>

</template>

<script>
import {s} from '../../mixins'

export default {
  name: 'CTOA',
  mixins: [s],
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