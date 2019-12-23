<template>
  <v-form
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Name *"
      :rules="name_rules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email *"
      :rules="email_rules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="company"
      label="Company"
      outlined
    ></v-text-field>
    <v-select
      label="Subject"
      outlined
      :items="subjects"
      v-model="subject"
      required
    >
    </v-select>
    <v-textarea
      label="Message"
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
          fontSize: $vuetify.breakpoint.xsOnly ? '16px' : 
                    $vuetify.breakpoint.smOnly ? '20px' : 
                    $vuetify.breakpoint.mdOnly ? '24px' : 
                    $vuetify.breakpoint.lgOnly ? '22px' : '32px',
        }"
      >
        <span> Send </span>
      </v-btn>
    </div>

  </v-form>
</template>

<script>
import rules from './rules'
import subjects from './subjects'

export default {
  name: 'Contact',
  props: ['set_name', 'set_email', 'set_company', 'set_subject'],
  data: () => ({
    valid: null,
    ...rules,
    subjects,
    name: '',
    email: '',
    company: '',
    subject: ''
  }),

  created () {
    console.log(this.set_name)
    this.name = this.set_name
    this.email = this.set_email
    this.company = this.set_company
    this.subject = this.set_subject
  },

  computed: {
  },

  methods: {
    submit () {
      
    }
  }
}
</script>

<style>

</style>