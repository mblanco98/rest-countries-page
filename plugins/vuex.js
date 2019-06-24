import createPersistedState from 'vuex-persistedstate'
export default ({ store }) => {
  createPersistedState({ key: 'vx' })(store)
}
