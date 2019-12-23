<template>
  <div class="meet_container flex-column align-center justify-center">
    <div class="meet_title_container">
      <h2 class="meet_title"></h2>
    </div>

    <div class="meet_members_container d-flex flex-wrap align-start justify-center"
      :style="{
        width: '100%'
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

export default {
  name: 'Meet',
  mixins: [s],
  components: {
    Member
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
</style>