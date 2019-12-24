<template>
  <div class="reviews_container"
    :style="{
      width: sn(90, 70, 50, 50, 50, 'vw')
    }"
  >
    <div class="reviews_title_container">
      <h3 class="reviews_title">Reviews</h3>
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

export default {
  name: 'Reviews',
  mixins: [s],
  components: {
    Review
  },
  data: () => ({
    reviews: []
  }),
  computed: {},
  watch: {},
  created () {
    if (this.testing) {this.reviews = testing_reviews}
    fetch('https://api.bears.group/team_clean/reviews')
      .then(res => res.json())
      .then((json) => {
      const reviews = { data } = json
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