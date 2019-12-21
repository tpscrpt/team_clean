<template>
  <div class="ctoa_container d-flex align-center justify-center mt-4">
    <v-btn class="commercial_space_maintenance_ctoa"
      rounded
      color="accent"
      @click="() => callback()"
      x-large
      :style="{
        fontSize: $vuetify.breakpoint.mdAndUp ? '28px' : '22px',
        zIndex: '22'
      }"
    >
      <span> Schedule A Meeting </span>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'CommercialSpaceMaintenanceCTOA',
  components: {},
  props: ['callback'],
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