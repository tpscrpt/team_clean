<template>
  <v-carousel-item
    :style="{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}"
    transition="fade"
    reverse-transition="fade"
    :eager="true"
  >
    <transition name="item-fade">
      <div
        class="item d-flex align-center justify-center wrap"
        v-if="carousel_slide == index"
        :style="{backgroundImage: `url('${item.image}')`}"
      >
        <div
          :style="{marginBottom: '5vh'}"
        >
          <transition name="titleanim" appear>
            <h3
              class="item_title"
              v-if="carousel_slide == index"
              :style="{fontSize: $vuetify.breakpoint.xsOnly ? '22px' : '38px'}"
            >
              {{item.title}}
            </h3>
          </transition>
          
          <transition name="phraseanim" appear>
            <h3
              class="phrase mx-8"
              v-if="carousel_slide == index"
              :style="{fontSize: $vuetify.breakpoint.xsOnly ? '26px' : '53px'}"
            >
              {{item.phrase}}
            </h3>
          </transition>
          
          <transition name="ctoa" appear>
            <slot name="ctoa"></slot>
          </transition>

        </div>
      </div>
    </transition>
  </v-carousel-item>

</template>

<script>
export default {
  name: "CarouselItem",
  components: {},
  props: ['item', 'carousel_slide', 'index'],
  data: () => ({
  }),
  watch: {
  },
  computed: {
  }
};
</script>

<style scoped>
.item {
  height: 100%;
  background-size: cover;
}
.item-fade-enter-to {
  transition: opacity 1s;
}
.item-fade-enter, .item-fade-leave-to {
  opacity: 0.6
}

.item_title {
  color: white;
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
  text-align: center

}
.titleanim-enter-to {
  transition: opacity 0.5s;
  transition-delay: 0s;
  animation-delay: 0s;
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
  transition: opacity 0.5s;
  transition-delay: 0.3s;
  animation-delay: 0.5s;
  animation: slide-in-from-afar  0.7s forwards;
}
.phraseanim-enter, .phraseanim-leave-to {
  opacity: 0
}


@keyframes slide-in {
  0% { transform: translateY(50px); }
  100% { transform: translateY(0); }
}
@keyframes slide-in-from-afar {
  0% { transform: translateY(75px); }
  100% { transform: translateY(0); }
}
</style>

<style lang="scss">
.v-window { 
  &-x-transition, 
  &-x-reverse-transition, 
  &-y-transition, 
  &-y-reverse-transition { 
    &-enter-active, 
    &-leave-active { 
      transition: opacity 0.5s 
    } 
  } 
}
</style>