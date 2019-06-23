<template>
  <v-app :dark="isDark">
    <v-toolbar fixed app>
      <v-toolbar-title>Where in the world?</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat @click="switchTheme">
          <v-icon small>{{ isDark ? 'fas fa-sun' : 'fas fa-moon' }} </v-icon>
          <span class="fix-left-mar normalize-text">
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.state.isDark
    }
  },
  mounted() {
    this.$store.dispatch('getAllCountries')
  },
  methods: {
    switchTheme() {
      this.$store.dispatch('switchDarkMode')
    }
  }
}
</script>
