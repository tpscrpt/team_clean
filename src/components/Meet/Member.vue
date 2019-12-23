<template>
  <div class="member_container flex-column align-center justify-start"
    :style="{
      width: sn(90, 40, 20, 20, 20, 'vw'),
      padding: s(12, 4),
      marginBottom: s(10, 0),
    }"
  >
    <div class="member_img_container d-flex align-center justify-center"
      :style="{
      }"
    >
      <img class="member_img" :src="member.img"
        :style="{
          maxWidth: '100%'
        }"
      />
    </div>
    <br>
    <div class="member_name_container text-center">
      <h3 class="member_name">{{member.name}}</h3>
    </div>
    <div class="member_title_container text-center">
      <h3 class="member_title">{{member.title}}</h3>
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
  letter-spacing: 2px
}
.member_title {
  font-family: 'Poppins', sans-serif;
}
.member_excerpt {
  text-align: justify
}
.member_img {
  border-radius: 50%
}
</style>