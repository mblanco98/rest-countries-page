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
  }
}
