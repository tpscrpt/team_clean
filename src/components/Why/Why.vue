<template>
  <div class="why_container flex-column align-center justify-start"
    :style="{
      paddingTop: s(20, 20)
    }"
  >
    <div class="why_title_container"
      :style="{
        marginLeft: sp('30px', '80px', '200px', '230px', '20vw'),
        textAlign: 'left'
      }"
    >
      <ResponsiveTitle text="Why choose us?"/>

    </div>
    <Reason v-for="(reason, index) in reasons" :key="index" :reason="reason"/>
  </div>
</template>

<script>
import {s} from '../../mixins'
import Reason from './Reason'
import reasons from './reasons'
import {Title as ResponsiveTitle} from '../responsive'

export default {
  name: 'Why',
  mixins: [s],
  components: {
    Reason,
    ResponsiveTitle
  },
  data: () => ({
    reasons
  }),
  computed: {},
  methods: {}
}
</script>

<style>
.why_container {
  width: 100%;
}
.why_title_container > h2 {
  font-family: 'Dancing Script', cursive;
  text-align: left;
  color: var(--v-secondary-darken4)
}
</style>