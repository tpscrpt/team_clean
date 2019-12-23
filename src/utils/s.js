export default function(vuetify, base, increment, suffix = 'px') {
  return (vuetify.breakpoint.xsOnly ? base + increment * 0:
          vuetify.breakpoint.xsOnly ? base + increment * 1 :
          vuetify.breakpoint.xsOnly ? base + increment * 2 :
          vuetify.breakpoint.xsOnly ? base + increment * 3 :
          vuetify.breakpoint.xsOnly ? base + increment * 4 :
                                      base + increment * 5 ) + suffix
}