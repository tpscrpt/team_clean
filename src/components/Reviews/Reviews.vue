<template>
  <div class="reviews_container"
    :style="{
      width: '100%'
    }"
  >
    <div class="reviews_title_container">
      <ResponsiveTitle text="Reviews" />
    </div>
    <v-carousel
      hide-delimiter-background
      :cycle="true"
      :continuous="true"
      :interval="7234"
      :show-arrows="false"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item 
        transition="fade"
        reverse-transition="fade"
        v-for="(review, index) in reviews" :key="index"
      >
        <Review :review="review"/>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import {s} from '../../mixins'
import testing_reviews from './testing_reviews'
import Review from './Review'
import {Title as ResponsiveTitle} from '../responsive'

export default {
  name: 'Reviews',
  mixins: [s],
  components: {
    Review,
    ResponsiveTitle
  },
  data: () => ({
    reviews: [],
    testing: true,
  }),
  computed: {},
  watch: {},
  created () {
    console.log(this.testing)
    if (this.testing) { return this.reviews = testing_reviews}
    fetch('https://api.bears.group/team_clean/reviews')
      .then(res => res.json())
      .then((json) => {
      const { reviews } = json
      if (reviews && reviews.length > 0) this.reviews = reviews
    })
  }
}
</script>

<style>
.reviews_title {
  font-family: 'Dancing Script', cursive;
  color: var(--v-secondary-darken4);
  text-decoration: underline;
}
</style>