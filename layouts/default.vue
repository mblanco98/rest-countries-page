<template>
  <v-app :dark="isDark">
    <c-navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CNavbar from '../components/Navbar'
import theme from '../mixins/theme'

export default {
  components: {
    'c-navbar': CNavbar
  },
  mixins: [theme]
}
</script>
