<template>
  <div class="meet_container flex-column align-center justify-center"
    :style="{
      padding: sn(0, 2, 3, 4, 5, 'vw'),
      paddingTop: sp('calc(0vw + 16px)','calc(2vw + 16px)','calc(3vw + 24px)', 'calc(4vw + 24px)', 'calc(5vw + 32px)')
    }"
  >
    <div class="meet_title_container text-center">
      <ResponsiveTitle text="Meet Team Clean"/>
    </div>

    <div class="meet_members_container d-flex flex-wrap align-start justify-center"
      :style="{
        width: '100%',
      }"
    >
      <Member v-for="(member, index) in members" :key="index" :member="member"/>
    </div>
  </div>
</template>

<script>
import {s} from '../../mixins'
import Member from './Member'
import members from './members'
import {Title as ResponsiveTitle} from '../responsive'

export default {
  name: 'Meet',
  mixins: [s],
  components: {
    Member,
    ResponsiveTitle
  },
  data: () => ({
    members
  }),
  computed: {},
  methods: {},
}
</script>

<style>
.meet_container {
  width: 100%;
}
.meet_title {
  text-align: center;
  font-family: 'Dancing Script', cursive;
  color: var(--v-secondary-darken4)
}
</style>