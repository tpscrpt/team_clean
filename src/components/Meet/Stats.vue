<template>
  <div v-if="show" class="stats_container d-flex align-center justify-start flex-wrap">
    <div class="rating_container d-flex align-center justify-end">
      <v-icon v-for="(star, index) in stars" :key="index" color="#FFD700">
        {{star == 1 ? 'mdi-star' : star == 0.5 ? 'mdi-star-half' : 'mdi-star-outline'}}
      </v-icon>
      <span
        class="stats_jobs"
        :style="{
          fontSize: s(14, 1)
        }"
      >({{jobs}})</span>
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
      this.rating = 4.5
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
  computed: {
    stars() {
      let stars = []
      const rounded = Math.round(this.rating * 2) / 2

      for (let i = 0; i < Math.floor(rounded); i ++) stars.push(1)
      if (rounded % 1 > 0) stars.push(0.5)
      for (let i = 0; stars.length < 5; i ++) stars.push(0)

      return stars
    }
  }
}
</script>

<style>
.stats_container {
  margin-left: -4px
}
.stats_jobs {
  font-family: 'Babylove';
  color: var(--v-accent-darken1)
}
</style>