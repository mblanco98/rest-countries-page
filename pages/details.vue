<template>
  <v-layout column>
    <v-btn :v-ripple="false" rounded class="back-btn" nuxt to="/">
      <v-icon>fas fa-arrow-left</v-icon>
      <span class="normalize-text fix-left-mar">Back</span>
    </v-btn>
    <v-flex xs12 class="details-wrapper">
      <v-layout row wrap justify-center>
        <v-img :src="country.flag" class="flag-img" />
        <v-card class="card-wrapper" flat color="transparent">
          <v-card-title primary-title>
            <div class="card-inner-wrapper">
              <h3 class="headline mb-4">
                {{ country.name }}
              </h3>
              <div class="grid-items-wrapper">
                <div
                  v-for="(item, i) in countryInfo"
                  :key="i"
                  class="grid-item"
                >
                  <strong>{{ item[0] }}:</strong>
                  <span>
                    {{
                      item[1].toLowerCase() === 'population'
                        ? formatNumber(country[item[1]])
                        : item[1].toLowerCase() === 'currencies'
                        ? country[item[1]][0].name
                        : item[1].toLowerCase() === 'topleveldomain'
                        ? country[item[1]][0]
                        : item[1].toLowerCase() === 'languages'
                        ? getCountryLanguages(country[item[1]])
                        : country[item[1]]
                    }}
                  </span>
                </div>
              </div>
            </div>
            <div
              v-if="country.borders && country.borders.length"
              class="tags-wrapper"
            >
              <strong>Border Countries: </strong>
              <div class="tags-inner-wrapper">
                <v-chip
                  v-for="(tag, i) in country.borders"
                  :key="i"
                  label
                  class="tag"
                >
                  {{ getCountryName(tag) }}
                </v-chip>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import formatNumber from '../helpers/formatNumber'

export default {
  data: () => ({
    formatNumber,
    countryInfo: [
      ['Native Name', 'nativeName'],
      ['Top Level Domain', 'topLevelDomain'],
      ['Population', 'population'],
      ['Currencies', 'currencies'],
      ['Region', 'region'],
      ['Languages', 'languages'],
      ['Sub Region', 'subregion'],
      ['Capital', 'capital']
    ]
  }),
  computed: {
    country() {
      return this.$store.state.activeCountry
    },
    getCountryName() {
      return this.$store.getters.getCountryName
    }
  },
  methods: {
    getCountryLanguages(langs) {
      return String(langs.map(lang => lang.name))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/details.scss';
</style>
