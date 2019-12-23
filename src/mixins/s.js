export default {
  methods: {
    s(base, increment, suffix = 'px') {
      return (this.$vuetify.breakpoint.xsOnly ? base + increment * 0:
              this.$vuetify.breakpoint.smOnly ? base + increment * 1 :
              this.$vuetify.breakpoint.mdOnly ? base + increment * 2 :
              this.$vuetify.breakpoint.lgOnly ? base + increment * 3 :
                                                base + increment * 4 ) + suffix
    },
    sn(xs, sm, md, lg, xl, suffix = 'px') {
      return (this.$vuetify.breakpoint.xsOnly ? xs :
              this.$vuetify.breakpoint.smOnly ? sm :
              this.$vuetify.breakpoint.mdOnly ? md :
              this.$vuetify.breakpoint.lgOnly ? lg :
                                                xl ) + suffix
    },
    sp(xs, sm, md, lg, xl) {
      return this.$vuetify.breakpoint.xsOnly ? xs :
             this.$vuetify.breakpoint.smOnly ? sm :
             this.$vuetify.breakpoint.mdOnly ? md :
             this.$vuetify.breakpoint.lgOnly ? lg :
                                               xl
    }
  }
}