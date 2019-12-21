<template>
  <div
    class="carousel_container"
    :style="{width: '100%',
             padding: 0,
             height: $vuetify.breakpoint.xsOnly ? '40%' : 
                     $vuetify.breakpoint.smOnly ? '60%' : '100%'}"
  >
    <v-carousel
      height="100%"
      hide-delimiter-background
      :hide-delimiters="$vuetify.breakpoint.xsOnly"
      :delimiter-icon="$vuetify.breakpoint.smOnly ? 'mdi-circle-medium' : 'mdi-circle'"
      :show-arrows="false"
      :continuous="true"
      :cycle="false"
      v-model="carousel_slide"
    >
      <v-carousel-item
        v-for="(carousel_item, index) in carousel_items"
        :key="index"
        :style="{display: 'flex',
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
            No Slot
          </template>
        </CarouselItem>
      </v-carousel-item>

    </v-carousel>
    <img
      class="wave"
      :style="{bottom: $vuetify.breakpoint.mdAndUp ? '-2vh' : '0'}"
      :src="wave_1"
    />
  </div>
</template>

<script>
import CarouselItem from './CarouselItem'
import carousel_items from './items'

export default {
  name: 'Carousel',
  components: {
    CarouselItem
  },
  data: () => ({
    wave_1: require('../../assets/waves/wave_11.webp'),
    carousel_slide: 0,
    carousel_items,
  }),

  watch: {
    carousel_slide(val) {
      console.log(val)
    }
  }
};
</script>

<style scoped>
.carousel_container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #335588;
}
.carousel_item_container {
  position: absolute;
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