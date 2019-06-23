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
            append-icon=""
            color="white"
            hide-no-data
            box
            solo
            flat
            hide-selected
            placeholder="Search for a country"
            return-object
          />
          <v-select
            v-model="filter"
            :items="filterOpts"
            clearable
            box
            solo
            flat
            label="Filter by Region"
            @change="filterCountries"
          />
        </div>
      </v-toolbar>
    </v-flex>
    <v-container
      grid-list-xl
      style="margin-top: 3rem"
      d-flex
      fluid
      align-content-center
      justify-content-center
    >
      <v-layout row wrap align-content- justify-center>
        <v-flex v-for="(country, i) in countries" :key="i">
          <v-card v-ripple class="inline-block" hover width="200">
            <v-img :src="country.flag" aspect-ratio="1.80" />
            <v-card-title primary-title>
              <div class="inner-card-wrapper">
                <h3 class="headline mb-0">{{ country.name }}</h3>
                <ul class="no-decor-list card-list">
                  <li>
                    <strong>Population: </strong>
                    {{ country.population ? country.population : 'Unknown' }}
                  </li>
                  <li>
                    <strong>Region: </strong>
                    {{ country.region ? country.region : 'Unknown' }}
                  </li>
                  <li>
                    <strong>Capital: </strong>
                    {{ country.capital ? country.capital : 'Unknown' }}
                  </li>
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
import { mapActions } from 'vuex'
import debounce from '../helpers/debounce'

export default {
  data: () => ({
    search: '',
    isLoading: false,
    items: [],
    filterOpts: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    model: '',
    filter: ''
  }),
  computed: {
    countries() {
      return this.$store.state.countries
    }
  },
  watch: {
    search(s) {
      if (s === null || s.length <= 0) {
        this.getAllCountries()
        return
      }
      debounce(() => {
        this.getCountryByName(s)
      }, 620)()
    }
  },
  created() {
    this.getAllCountries()
  },
  methods: {
    ...mapActions({
      getCountriesByRegion: 'getCountriesByRegion',
      getCountryByName: 'getCountryByName',
      getAllCountries: 'getAllCountries'
    }),

    filterCountries(region) {
      return !region
        ? this.getAllCountries()
        : this.getCountriesByRegion(region)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/pages/index.scss';
</style>
