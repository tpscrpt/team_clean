export default [
  v => !!v || 'Name is required',
  v => (v && v.length <= 40)  || 'Name must be less than 40 characters'
]