<template>
  <h2 class="responsive_title"
    :style="{
      fontSize: sn(38, 32, 40, 48, 56),
      textDecoration: 'underline',
      marginBottom: sn(16, 24, 32, 40, 48)
    }"          

  >{{text}}</h2>
</template>

<script>
import {s} from '../../../mixins'

export default {
  name: 'ResponsiveTitle',
  props: ['text'],
  mixins: [s]
}
</script>

<style>
.responsive_title {
  font-family: 'Dancing Script', cursive;
  color: var(--v-secondary-darken4)
}
</style>