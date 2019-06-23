import * as types from '../storeActionTypes'

export const state = () => ({
  isDark: false,
  countries: []
})

export const mutations = {
  [types.SWITCH_THEME](state) {
    state.isDark = !state.isDark
  },

  [types.GET_ALL_COUNTRIES](state, countries) {
    state.countries = countries
  },

  [types.GET_COUNTRIES_BY_REGION](state, countries) {
    state.countries = countries
  },

  [types.GET_COUNTRY](state, country) {
    state.countries = country
  }
}

export const actions = {
  switchDarkMode({ commit }) {
    commit(`${types.SWITCH_THEME}`)
  },

  async getAllCountries({ commit }) {
    const res = await this.$axios.$get('all')
    if (!res) return
    commit(`${types.GET_ALL_COUNTRIES}`, res)
  },

  async getCountryByName({ commit }, name) {
    const res = await this.$axios.$get(`name/${name}`)
    if (!res) return
    commit(`${types.GET_COUNTRY}`, res)
  },

  async getCountriesByRegion({ commit }, region) {
    const res = await this.$axios.$get(`region/${region}`)
    if (!res) return
    commit(`${types.GET_COUNTRIES_BY_REGION}`, res)
  }
}
