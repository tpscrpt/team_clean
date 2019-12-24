<template>
  <div v-if="show" class="stats_container shrink d-flex align-start justify-end flex-wrap">
    <div class="jobs_container"></div>
    <div class="rating_container">
      <v-icon
        :style="{
          background: `linear-gradient(to bottom, black 0%, black 50%, #000000 50%,w hite 50%, white 100%)`
        }"
        color="primary"
      >
        mdi-star-outline
      </v-icon>
    </div>
  </div>
</template>

<script>
import {s} from '../../mixins'

export default {
  name: 'Stats',
  mixins: [s],
  components: {},
  props: ['member'],
  data: () => ({
    show: false,
    rating: null,
    jobs: null,
    testing: true,
  }),
  created () {
    if (!this.member.id) return;
    if (this.testing) {
      this.rating = 4.4
      this.jobs = 12
      this.show = true
      return
    }
    fetch(`https://api.bears.group/team_clean/stats/${this.member.id}`)
      .then((res) => res.json())
      .then((json) => {
        const { rating, jobs } = json
        if (!rating || !jobs) return;
        this.rating = rating
        this.jobs = jobs
        this.show = true
    })
  },
  computed: {}
}
</script>

<style>

</style>