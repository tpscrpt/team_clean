import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#009ae4',
        secondary: '#2196f3',
        accent: '#18A98F',
        error: '#f44336',
        info: '#cddc39',
        success: '#8bc34a',
        warning: '#ffeb3b'
      },
    },
  },
});
