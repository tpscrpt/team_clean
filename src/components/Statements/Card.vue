<template>
  <v-card
    shaped
    class="flex-column align-center justify-center"
    :style="cardStyle"
  >
    <div class="d-flex align-center" :style="cardHeaderStyle">
      <v-icon
        :size="$vuetify.breakpoint.xsOnly ? '24px' : $vuetify.breakpoint.smOnly ? '32px' : '56px'"
        color="secondary"
        :style="{display: $vuetify.breakpoint.xsOnly ? 'block' : undefined}"
      >
        {{card.icon}}
      </v-icon>
      <v-card-title :style="cardTitleStyle">testtest test testtest</v-card-title>
    </div>

    <v-card-subtitle :style="cardTextStyle">{{card.text}}</v-card-subtitle>
    <v-list>
      <v-list-item
        
      >test</v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'StatementCard',
  components: {},
  props: ['card'],
  computed: {
    cardStyle () {
      return this.$vuetify.breakpoint.xsOnly ? {
        padding: '16px',
        margin: '16px 24px 8px 24px',
        width: '100%',
        maxWidth: '400px'
      } : {
        padding: '24px',
        margin: '24px 32px 16px 32px',
        width: '50%',
        maxWidth: '500px'
      }
    },
    cardHeaderStyle () {
      return this.$vuetify.breakpoint.xsOnly ? {
        justifyContent: 'flex-start'
      } : {
        justifyContent: 'center'
      }
    },
    cardTextStyle () {
      return this.$vuetify.breakpoint.xsOnly ? {
        padding: '8px',
      } : {
        
      }
    },
    cardTitleStyle () {
      return this.$vuetify.breakpoint.xsOnly ? {
        margin: '4px 12px',
        padding: '0'
      } : {
        
      }
    }
  }

}
</script>

<style>

</style>