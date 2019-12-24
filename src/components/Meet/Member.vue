<template>
  <div class="member_container flex-column align-center justify-start"
    :style="{
      width: sn(90, 70, 35, 20, 20, 'vw'),
      padding: s(12, 4),
      margin: sn(1, 2, 2, 2, 3, 'vw'),
      marginBottom: s(10, 0),
    }"
  >
    <div class="member_img_container d-flex align-center justify-center"
      :style="{
      }"
    >
      <img class="member_img" :src="member.img"
        :style="{
          width: sn(150, 150, 200, 200, 220)
        }"
      />
    </div>
    <br>
    <div class="member_name_container text-center">
      <h3 class="member_name"
        :style="{
          fontSize: sn(22, 22, 24, 24, 24)
        }"
      >
        {{member.name}}
      </h3>
    </div>
    <div class="member_title_container text-left">
      <h3 class="member_title"
        :style="{
          fontSize: sn(18, 18, 20, 22, 22)
        }"
      >{{member.title}}</h3>
    </div>
    <br>
    <div class="member_excerpt_container">
      <p class="member_excerpt">{{member.excerpt}}</p>
    </div>
  </div>
</template>

<script>
import {s} from '../../mixins'

export default {
  name: 'Member',
  mixins: [s],
  props: ['member'],
  components: {},
  data: () => ({}),
  computed: {},
}
</script>

<style>
.member_name {
  font-family: 'Babylove';
  letter-spacing: 2px;
  color: var(--v-accent-darken1);
}
.member_title {
  font-family: 'Poppins', sans-serif;
  color: var(--v-primary-darken3)
}
.member_excerpt {
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
.member_img {
  border-radius: 50%
}
</style>