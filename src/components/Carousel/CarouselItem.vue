<template>
  <transition name="item-fade" appear>
    <div
      class="carousel_item d-flex align-center justify-center wrap"
      v-if="show"
      :style="{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${carousel_item.image}')`}"
    >
      <div
        :style="{marginTop: $vuetify.breakpoint.xsOnly ? '-24px' : 
                            $vuetify.breakpoint.smOnly ? '-32px' : 
                            $vuetify.breakpoint.mdOnly ? '-2vh' : 
                            $vuetify.breakpoint.lgOnly ? '-3vh' : '-4vh'}"
      >
        <transition name="titleanim" appear>
          <h3
            class="item_title"
            v-if="show"
            :style="{fontSize: $vuetify.breakpoint.xsOnly ? '26px' : 
                               $vuetify.breakpoint.smOnly ? '30px' : 
                               $vuetify.breakpoint.mdOnly ? '34px' : 
                               $vuetify.breakpoint.lgOnly ? '38px' : '42px'}"
          >
            {{carousel_item.title}}
          </h3>
        </transition>
        
        <transition name="phraseanim" appear>
          <h3
            class="phrase mx-8"
            v-if="show"
            :style="{fontSize: $vuetify.breakpoint.xsOnly ? '30px' : 
                               $vuetify.breakpoint.smOnly ? '34px' : 
                               $vuetify.breakpoint.mdOnly ? '38px' : 
                               $vuetify.breakpoint.lgOnly ? '42px' : '46px'}"
          >
            {{carousel_item.phrase}}
          </h3>
        </transition>
        
        <transition name="ctoa" appear>
          <slot name="ctoa"></slot>
        </transition>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselItem",
  components: {},
  props: ['carousel_item', 'carousel_slide', 'index'],
  data: () => ({
  }),
  watch: {},
  computed: {
    show () {
      return this.carousel_slide == this.index
    }
  }
};
</script>

<style scoped>
.carousel_item {
  height: 100%;
  background-size: cover !important;
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

.ctoa-enter-to {
  transition: opacity 0.5s;
  transition-delay: 0.6s;
  animation-delay: 1s;
  animation: slide-in-from-afar-more  0.7s forwards;
}
.ctoa-enter, .ctoa-leave-to {
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
@keyframes slide-in-from-afar-more {
  0% { transform: translateY(100px); }
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