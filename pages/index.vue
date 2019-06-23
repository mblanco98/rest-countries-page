<template>
  <v-layout column>
    <v-flex xs12>
      <v-toolbar height="80px" color="transparent" flat>
        <div class="large navbar-items-wrapper">
          <v-autocomplete
            v-model="model"
            prepend-inner-icon="search"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="white"
            hide-no-data
            hide-selected
            solo
            placeholder="Search for a country"
            return-object
          />
          <v-select
            v-model="filter"
            :items="filterOpts"
            solo
            label="Outline style"
            outline
          />
        </div>
      </v-toolbar>
    </v-flex>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex
          v-for="(country, i) in countries"
          :key="i"
          style="margin-top: 1rem"
          xs3
        >
          <v-card v-ripple class="inline-block" hover>
            <v-img :src="country.flag" aspect-ratio="2" />

            <v-card-title primary-title>
              <div class="inner-card-wrapper">
                <h3 class="headline mb-0">{{ country.name }}</h3>
                <ul class="no-decor-list card-list">
                  <li><strong>Population: </strong>{{ country.population }}</li>
                  <li><strong>Region: </strong> {{ country.region }}</li>
                  <li><strong>Capital: </strong> {{ country.capital }}</li>
                </ul>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    search: '',
    isLoading: false,
    items: [],
    filterOpts: ['África', 'América', 'Asia', 'Europe', 'Oceania'],
    model: '',
    filter: ''
  }),
  computed: {
    countries() {
      return this.$store.state.countries
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/pages/index.scss';
</style>
