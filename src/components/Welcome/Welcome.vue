<template>
    <div class="welcome_content" :style="welcome_content_style">
      <img :src="welcome_img" :style="welcome_image_style">
      <div class="welcome_descriptors" :style="welcome_descriptors_style">
        <span class="welcome_title" :style="welcome_title_style">Welcome!</span>
        <h4 class="welcome_subtitle" :style="welcome_subtitle_style">Team Clean, a Bears Group Project</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem incidunt possimus nesciunt, dolor fuga eius sapiente qui soluta eveniet assumenda ducimus quam perspiciatis ipsum. Sit, doloribus. Ex, dolor et?</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  components: {},
  data: () => ({
    welcome_img: require('../../assets/welcome.webp')
  }),
  computed: {
    welcome_content_style() {
      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap',
      ...(this.$vuetify.breakpoint.xsOnly ? {
        padding: '56px',
      } : this.$vuetify.breakpoint.smOnly ? {
        padding: '32px',
      } : this.$vuetify.breakpoint.mdOnly ? {
        padding: '36px',
      } : this.$vuetify.breakpoint.lgOnly ? {
        padding: '42px',
      } : {
        padding: '56px',

      })
      }
    },
    welcome_image_style() {
      return {
        display: 'inline-block',
      ...(this.$vuetify.breakpoint.xsOnly ? {
        width: '100%',
        marginBottom: '24px'
      } : this.$vuetify.breakpoint.smOnly ? {
        width: '100%',
      } : this.$vuetify.breakpoint.mdOnly ? {
        width: '50%',

      } : this.$vuetify.breakpoint.lgOnly ? {
        width: '60%',

      } : {
        width: '60%',

      })
      }
    },
    welcome_descriptors_style() {
      return {
        display: 'inline-block',
      ...(this.$vuetify.breakpoint.xsOnly ? {
        width: '100%',
      } : this.$vuetify.breakpoint.smOnly ? {
        width: '100%',
      } : this.$vuetify.breakpoint.mdOnly ? {
        width: '50%',

      } : this.$vuetify.breakpoint.lgOnly ? {
        width: '60%',
      } : {
        width: '60%',
      })
      }
    },
    welcome_title_style() {
      return {
      ...(this.$vuetify.breakpoint.xsOnly ? {
        fontSize: '32px',
        marginBottom: '20px'
      } : this.$vuetify.breakpoint.smOnly ? {
        width: '100%',
      } : this.$vuetify.breakpoint.mdOnly ? {
        width: '50%',

      } : this.$vuetify.breakpoint.lgOnly ? {
        width: '60%',
      } : {
        width: '60%',
      })
      }
    },
    welcome_subtitle_style() {
      return {
      ...(this.$vuetify.breakpoint.xsOnly ? {
        fontSize: '24px',
        lineHeight: '1.25',
        letterSpacing: '0',
        marginBottom: '25px'
      } : this.$vuetify.breakpoint.smOnly ? {
        width: '100%',
      } : this.$vuetify.breakpoint.mdOnly ? {
        width: '50%',

      } : this.$vuetify.breakpoint.lgOnly ? {
        width: '60%',
      } : {
        width: '60%',
      })
      }
    }
  }
}
</script>

<style>
.welcome_container {
  width: 100%;
}
.welcome_content {
  width: 100%;
}
.welcome_descriptors {
  display: inline-block
}
.welcome_title {
  font-family: 'Dancing Script', cursive;
  color: var(--v-accent-darken1)
}
.welcome_subtitle {
  font-family: 'Poppins', sans-serif;
  color: var(--v-primary-darken4)
}
.welcome_text {
  font-family: 'Poppins', sans-serif;
}
</style>