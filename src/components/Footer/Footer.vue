<template>
  <footer class="flex-column align-center justify-center"
    :style="{
      padding: s(24, 8)
    }"
  >
    <h4 class="footer_title"
      :style="{
        fontSize: s(16, 3)
      }"  
    >Team Clean, A Bears Group Project</h4>
    <div class="social_icons d-flex align-center justify-start"
      :style="{
        padding: s(8, 4)
      }" 
    >
      <div class="social_icon"
        v-for="(icon, index) in social_icons"
        :key="index"
        :style="{
          marginRight: s(8, 4)
        }"
      >
        <v-icon class="social_icon" color="accent"
          :size="s(18, 4)"
        >{{icon.icon}}</v-icon>
      </div>
    </div>
  </footer>
</template>

<script>
import social_icons from './icons'
import {s} from '../../mixins'

export default {
  name: 'Footer',
  mixins: [s],
  components: {},
  props: [''],
  data: () => ({
    social_icons
  }),
  computed: {},
  watch: {},
  methods: {

  }
}
</script>

<style>
footer {
  background-color: #003977;
  min-height: 100px;

}
.footer_title {
  font-family: 'Babylove';
  color: #f3f3f3;
}
</style>