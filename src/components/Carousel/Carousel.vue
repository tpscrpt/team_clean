<template>
  <div
    class="carousel_container"
    :style="{width: '100%',
             padding: 0,
             height: $vuetify.breakpoint.xsOnly ? '80%' : 
                     $vuetify.breakpoint.smOnly ? '80%' : '100%'}"
  >
    <v-carousel
      height="100%"
      hide-delimiter-background
      :hide-delimiters="true"
      :show-arrows="false"
      :continuous="true"
      :cycle="false"
      :interval="7500"
      v-model="carousel_slide"
    >
      <v-carousel-item
        v-for="(carousel_item, index) in carousel_items"
        :key="index"
        :style="{display: carousel_slide == index ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center'}"
        transition="none"
        reverse-transition="none" 
        :eager="true"
        class="carousel_item_container"
      >

        <CarouselItem
          v-if="carousel_slide == index"
          :carousel_item="carousel_item"
          :index="index"
          :carousel_slide="carousel_slide"
        >
          <template v-slot:ctoa>
            
            <CTOA v-if="index === 0" :callback="fill_estimate_form" text="Free Estimate"/>
            <CTOA v-if="index === 1" :callback="fill_meeting_form" text="Schedule a meeting"/>
            <CTOA v-if="index === 2" :callback="talk_to_rep" text="Talk to a rep"/>
          </template>
        </CarouselItem>
      </v-carousel-item>

    </v-carousel>
    <img
      class="wave"
      :style="{bottom: $vuetify.breakpoint.lgAndUp ? '-3vh' : 
                       $vuetify.breakpoint.mdOnly ? '-2vh' : '0'}"
      :src="wave_1"
    />
  </div>
</template>

<script>
import CarouselItem from './CarouselItem'
import CTOA from './CTOA'
import carousel_items from './items'

export default {
  name: 'Carousel',
  components: {
    CarouselItem,
    CTOA
  },
  data: () => ({
    wave_1: require('../../assets/waves/wave_1.webp'),
    carousel_slide: 0,
    carousel_items,
  }),

  methods: {
    fill_estimate_form () {
      console.log('redirecting to estimate form completion')
    },
    fill_meeting_form () {
      console.log('redirecting to meeting form completion')
    },
    talk_to_rep() {
      console.log('popover talk to a rep details')
    }
  },

  watch: {
    carousel_slide(val) {
      console.log(val)
    }
  }
};
</script>

<style scoped>
.carousel_container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #335588;
}
.carousel_item_container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0
}

.wave {
  position: absolute;
  width: 100%;
  object-fit: cover;
}
</style>