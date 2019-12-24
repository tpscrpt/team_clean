<template>
  <div class="why_container flex-column align-center justify-start"
    :style="{
      marginTop: s(20, 20)
    }"
  >
    <div class="why_title_container"
      :style="{
        marginLeft: sp('30px', '80px', '200px', '230px', '20vw'),
        marginBottom: sn(16, 24, 32, 40, 48)
      }"
    >
      <h2
        :style="{
          fontSize: sn(38, 32, 40, 48, 56),
          textAlign: 'left',
          textDecoration: 'underline'
        }"
      >
        Why choose us?
      </h2>
    </div>
    <Reason v-for="(reason, index) in reasons" :key="index" :reason="reason"/>
  </div>
</template>

<script>
import {s} from '../../mixins'
import Reason from './Reason'
import reasons from './reasons'

export default {
  name: 'Why',
  mixins: [s],
  components: {
    Reason
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