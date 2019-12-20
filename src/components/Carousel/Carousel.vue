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
      <CarouselItem
        v-for="(item, index) in carousel_items"
        :key="index"
        :item="item"
        :index="index"
        :carousel_slide="carousel_slide"
      >
        <template v-slot:ctoa>
          No Slot
        </template>
      </CarouselItem>
    </v-carousel>
    <img
      class="wave"
      :style="{bottom: $vuetify.breakpoint.mdAndUp ? '-3vh' : '0'}"
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

.item {
  height: 100%;
  background-size: cover;
}
.item-fade-enter-to {
  transition: opacity 1s;
}
.item-fade-enter, .item-fade-leave-to {
  opacity: 0.3
}

.item_title {
  color: white;
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
  text-align: center

}
.titleanim-enter-to {
  transition: opacity 0.7s;
  transition-delay: 0s;
  animation: slide-in  0.7s forwards;
}
.titleanim-enter, .titleanim-leave-to {
  opacity: 0
}

.phrase {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center
}
.phraseanim-enter-to {
  transition: opacity 0.7s;
  transition-delay: 0.15s;
  animation: slide-in  0.7s forwards;
}
.phraseanim-enter, .phraseanim-leave-to {
  opacity: 0
}


@keyframes slide-in {
  0% { transform: translateY(50px); }
  100% { transform: translateY(0); }
}

.wave {
  position: absolute;
  width: 100%;
  object-fit: cover;
}
</style>