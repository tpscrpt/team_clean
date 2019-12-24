<template>
  <div class="reason_container d-flex align-start flex-wrap"
    :style="{
      justifyContent: sp('center', 'center', 'center', 'center', 'flex-start'),
      paddingLeft: s(30, 5),
      paddingTop: s(10, 5),
      paddingBottom: s(10, 5),
      paddingRight: s(30, 5),
      marginBottom: s(30, 1),
      marginRight: sn(0, 20, 30, 250, 50)
    }"
  >
    <div class="reason_img_container self-center"
      :style="{
        marginRight: s(12, 8),
        marginTop: s(-10, -4),
        marginBottom: s(15, 0)
      }"
    >
      <v-icon color="secondary" :size="sn(152, 107, 128, 152, 168)">{{reason.img}}</v-icon>
    </div>
    <div class="reason_text_container flex-column align-start justify-start shrink"
      :style="{
        maxWidth: sp(undefined, '50%', '45%', '45%', '35%')
      }"
    >
      <div class="reason_title_container">
        <h3 class="reason_title"
          :style="{
            fontSize: $vuetify.breakpoint.xsOnly ? '32px' : s(24, 4),
            letterSpacing: sn(1.5, 2, 2, 2, 3),
            marginBottom: s(4, 4)
          }"
        >
          {{reason.title}}
        </h3>
      </div>
      <div class="reason_desc_container">
        <p class="reason_desc"
          :style="{
            fontSize: s(16, 2)
          }"
        >
          {{reason.desc}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {s} from '../../mixins'

export default {
  name: 'Reason',
  props: ['reason'],
  mixins: [s],
  components: {},
  data: () => ({}),
  computed: {},
}
</script>

<style>
.reason_title {
  font-family: 'Babylove';
  letter-spacing: 3px;
  line-height: 1;
  color: var(--v-accent-base);
}
.reason_desc {
  font-family: 'Roboto', sans-serif;
  text-align: justify;
  font-weight: 300;
}
</style>