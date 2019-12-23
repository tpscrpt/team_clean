<template>
  <footer class="flex-column align-center justify-center"
    :style="{
      padding: $vuetify.breakpoint.xsOnly ? '24px' :
               $vuetify.breakpoint.smOnly ? '32px' :
               $vuetify.breakpoint.mdOnly ? '40px' :
               $vuetify.breakpoint.lgOnly ? '48px' : '56px'
    }"
  >
    <h4 class="footer_title"
      :style="{
        fontSize: $vuetify.breakpoint.xsOnly ? '16px' :
                  $vuetify.breakpoint.smOnly ? '19px' :
                  $vuetify.breakpoint.mdOnly ? '22px' :
                  $vuetify.breakpoint.lgOnly ? '25px' : '28px'
      }"  
    >Team Clean, A Bears Group Project</h4>
    <div class="social_icons d-flex align-center justify-start"
      :style="{
        padding: $vuetify.breakpoint.xsOnly ? '8px' :
                 $vuetify.breakpoint.smOnly ? '12px' :
                 $vuetify.breakpoint.mdOnly ? '16px' :
                 $vuetify.breakpoint.lgOnly ? '20px' : '24px'
      }" 
    >
      <div class="social_icon"
        v-for="(icon, index) in social_icons"
        :key="index"
        :style="{
          marginRight: $vuetify.breakpoint.xsOnly ? '8px' :
                       $vuetify.breakpoint.smOnly ? '12px' :
                       $vuetify.breakpoint.mdOnly ? '16px' :
                       $vuetify.breakpoint.lgOnly ? '20px' : '24px'
        }"
      >
        <v-icon class="social_icon" color="accent"
          :size="$vuetify.breakpoint.xsOnly ? '18px' :
                 $vuetify.breakpoint.smOnly ? '22px' :
                 $vuetify.breakpoint.mdOnly ? '26px' :
                 $vuetify.breakpoint.lgOnly ? '30px' : '34px'"
        >{{icon.icon}}</v-icon>
      </div>
    </div>
  </footer>
</template>

<script>
import social_icons from './icons'

export default {
  name: 'Footer',
  components: {},
  props: [''],
  data: () => ({
    social_icons
  }),
  computed: {},
  watch: {}
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