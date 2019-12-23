<template>
  <div class="statements_container d-flex align-center justify-center flex-wrap"
    :style="{width: '100%',}"
  >
    <Card v-for="(card, index) in cards" :key="index" :card="card"/>
  </div>
</template>

<script>
import Card from './Card'
import cards from './cards'

export default {
  name: 'Statements',
  components: {
    Card
  },
  data: () => ({
    cards
  }),
  computed: {},
  methods: {},
  watch: {}
}
</script>

<style>
.statements_container {}
</style>