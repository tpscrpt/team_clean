<template>
  <div class="contact_container d-flex align-center justify-center"
    :style="{
      width: '100%',
      padding: s(16, 8)
    }"    
  >
    <div class="container_subcontainer d-column align-center justify-start"
      :style="{
        width: sn('80', '70', '50', '30', '25', 'vw')
      }"
    >
      <v-form
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          label="Name"
          :rules="name_rules"
          outlined
          color="accent"
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Phone Number"
          outlined
          type="phone"
          :required="phone_required"
        ></v-text-field>
        <v-text-field
          color="accent"
          v-model="email"
          label="Email"
          :rules="email_rules"
          outlined
        ></v-text-field>
        <v-text-field
          color="accent"
          v-model="company"
          label="Company"
          outlined
        ></v-text-field>
        <v-select
          color="accent"
          label="Subject"
          outlined
          :items="subjects"
          v-model="subject"
        >
        </v-select>
        <v-date-picker
          v-if="show_date_picker"
          header-color="primary"
          color="accent"
          full-width
          :min="now()"
          multiple
          v-model="dates"
        ></v-date-picker>
        <v-textarea
          color="accent"
          label="Message"
          :style="{marginTop: s(8, 4)}"
        >
        </v-textarea>
        <div
          width="100%"
          class="d-flex align-center justify-center"
        >
          <v-btn
            class="navbar_button" 
            :disabled="!valid"
            @click="submit"
            rounded
            color="accent"
            :large="$vuetify.breakpoint.mdAndUp"
            :style="{
              fontSize:  s(16, 2),
              marginTop: s(8,  4)
            }"
          >
            <span> Send </span>
          </v-btn>
        </div>

      </v-form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import rules from './rules'
import subjects from './subjects'

import {s} from '../../mixins'

export default {
  name: 'Contact',
  mixins: [s],
  data: () => ({
    valid: null,
    ...rules,
    subjects,
    name: '',
    email: '',
    company: '',
    subject: '',
    dates: [],
  }),

  computed: {
    ...mapState([
      'contact_set_subject'
    ]),
    phone_required () {
      return 'Talk' === this.subject
    },
    show_date_picker () {
      return ['Schedule', 'Talk'].includes(this.subject)
    }
  },

  watch: {
    contact_set_subject (val) {
      this.subject = val
    }
  },

  methods: {
    date_filter(val) {
      return Date.now() - 84600000 * 2 - new Date(val) < 0
    },
    now() {
      return new Date(Date.now() - 84600000).toISOString()
    },
    submit () {
      
    }
  }
}
</script>

<style>

</style>